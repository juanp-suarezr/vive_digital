<?php

namespace App\Http\Controllers;

use App\Events\OfertaActualizada;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Eventos;
use App\Models\Info_usuario;
use App\Models\Inscripciones;
use App\Models\Ofertas;
use App\Models\Perfil;
use App\Models\Puntos;
use App\Models\Registro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PuntosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // function __construct()
    // {
    //     $this->middleware('permission:usuarios-listar|usuarios-crear|usuarios-editar|usuarios-eliminar', ['only' => ['index', 'store']]);
    //     $this->middleware('permission:usuarios-crear', ['only' => ['create', 'store']]);
    //     $this->middleware('permission:usuarios-editar', ['only' => ['edit', 'update']]);
    //     $this->middleware('permission:usuarios-eliminar', ['only' => ['destroy']]);
    // }
    public function index()
    {

        return Inertia::render(

            'Puntos',

            [
                'puntos' => Puntos::all(),
                'infoPunto' => Perfil::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('id_punto', $search);
                    })->with(['punto' => function ($query) {
                        $query->orderBy('nombre', 'asc');
                    }])
                    ->get(),
                'ofertas' => Ofertas::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('id_puntos', $search);
                    })->with('inscripciones')
                    ->get(),
                'eventos' => Eventos::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('id_puntos', $search);
                    })
                    ->get(),
                'info_usuario' => Info_usuario::query()
                    ->when(RequestFacade::input('identificacion'), function ($query, $identificacion) {
                        $query->where('identificacion', $identificacion);
                    })
                    ->get(),
            ]
        );
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_oferta' => 'required',
            'identificacion' => 'string|max:15',

        ]);

        $oferta = Ofertas::find($request->id_oferta);

        // Verificar si la oferta existe
        if (!$oferta) {
            return redirect()->back()->withErrors(['error' => 'La oferta no existe.']);
        }

        // Verificar si la oferta está bloqueada (estado = 0)
        if ($oferta->estado == 0) {
            return redirect()->back()->withErrors(['error' => 'Esta oferta ya está bloqueada y no permite más inscripciones.']);
        }

        // Verificar el número de inscripciones sin certificado (certificado = false)
        $inscritos = Inscripciones::where('id_oferta', $request->id_oferta)
            ->where('estadoProceso', 'Inscrito') // Excluir los que ya tienen certificado
            ->count();
        // Comparar con el cupo máximo
        if ($oferta->cupo != null && $inscritos >= $oferta->cupo) {
            $oferta->estado = 0;
            $oferta->save();
            event(new OfertaActualizada($oferta)); // Emitir el evento de Cupo lleno
            return redirect()->back()->withErrors(['error' => 'El cupo para esta oferta ya está lleno.']);
        }

        $registrados = Info_usuario::where('identificacion', $request->identificacion)->get()->first();

        try {
            Inscripciones::create([
                'id_oferta' => $request->id_oferta,
                'id_info_user' => $registrados->id,
                'identificacion' => $request->identificacion,
            ]);
        } catch (\Illuminate\Database\QueryException $e) {
            // Manejar el error de clave única
            return redirect()->back()->withErrors(['error' => 'El usuario ya está inscrito en esta oferta.']);
        }


        return redirect()->back();
    }

    public function update(Request $request)
    {

        $request->validate([
            'descripcion' => 'string|max:300',
            'telefono' => 'string|max:15',
            'celular' => 'string|max:15',
            'email' => 'string|max:150',
            'instagram' => 'string|max:100',
            'facebook' => 'string|max:100',
            'twitter' => 'string|max:100',


        ]);

        $perfil = Perfil::where('id_punto', $request->id)->first();
        $perfil->instagram = $request->instagram;
        $perfil->facebook = $request->facebook;
        $perfil->twitter = $request->twitter;
        $perfil->telefono = $request->telefono;
        $perfil->celular = $request->celular;
        $perfil->email = $request->email;
        $perfil->descripcion = $request->descripcion;


        // Crear y persistir nuevo evento
        $perfil->save();


        return redirect()->route('perfil.index');
    }
}
