<?php

namespace App\Http\Controllers;

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

        $registrados = Info_usuario::where('identificacion', $request->identificacion)->get()->first();
        

        $inscripciones = Inscripciones::create([
            'id_oferta' => $request->id_oferta,
            'id_info_user' => $registrados->id,
            'identificacion' => $request->identificacion,
        ]);


        return redirect()->route('puntos.index');
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
