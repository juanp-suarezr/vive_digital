<?php

namespace App\Http\Controllers;

use App\Exports\InscritosExports;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Ofertas;
use App\Models\Perfil;
use App\Models\Puntos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Pagination\Paginator;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\OfertasExports;
use App\Models\Inscripciones;

class OfertasController extends Controller
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
        $puntosID = [];
        $puntos = Puntos::where('id_user', Auth::id())->get();
        if (Auth::user()->roles[0]->name == 'Administrador' || Auth::user()->roles[0]->name == 'Supervisor') {
            $puntos = Puntos::all();
        } else {
            $puntosID = $puntos[0]->id;
        }

        return Inertia::render(

            'Perfil/Index',

            [
                'puntos' => $puntos,
                'infoPunto' => Perfil::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('id_punto', $search);
                    })->orWhere('id_punto', $puntosID)
                    ->with('punto')->get(),
                'ofertas' => Ofertas::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('id_puntos', $search);
                    })->orWhere('id_puntos', $puntosID)
                    ->get(),
            ]
        );
    }

    public function create(Request $request)
    {

        return Inertia::render('Perfil/AddOferts', [
            'punto_id' => $request->id,
        ]);
    }

    public function store(Request $request)
    {

        $this->validate($request, [
            'nombre' => 'required|string',

            'horario' => 'string|max:100',
            'descripcion' => 'string|max:300',
            'lugar' => 'string|max:100',


        ]);

        $fileName = 'NA';

        if ($request->banner) {

            $request->validate([

                'banner' => 'mimes:jpg,png,jpeg,gif,bmp,tiff,svg,web,webp|max:2048',

            ]);


            $folder = 'ofertas';
            $extension = $request->file('banner')->getClientOriginalExtension();

            $fileName = time() . '_oferta_' . $request->nombre . '.' . $extension;
            $filePath = $request->file('banner')->storeAs('uploads/' . $folder, $fileName, 'public');
        }

        $ofertas = Ofertas::create([
            'id_puntos' => $request->input('id_puntos'),
            'nombre' => $request->input('nombre'),
            'horario' => $request->input('horario'),
            'descripcion' => $request->input('descripcion'),
            'lugar' => $request->input('lugar'),
            'banner' => $fileName,
            'estado' => $request->input('estado'),

        ]);

        return redirect()->route('perfil.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $oferta = Ofertas::find($id);

        return Inertia::render('Perfil/EditOferts', compact('oferta'));
    }

    public function actuOferts(Request $request)
    {

        $request->validate([
            'nombre' => 'required|string',

            'horario' => 'string|max:100',
            'descripcion' => 'string|max:300',
            'lugar' => 'string|max:100',
            'estado',


        ]);

        $oferta = Ofertas::where('id', $request->id)->first();
        $oferta->nombre = $request->nombre;
        $oferta->horario = $request->horario;
        $oferta->descripcion = $request->descripcion;
        $oferta->lugar = $request->lugar;
        $oferta->estado = $request->estado;



        if ($request->banner != 'NA' && $request->banner != $oferta->banner) {

            $request->validate([

                'banner' => 'mimes:jpg,png,jpeg,gif,bmp,tiff,svg,web,webp|max:2048',

            ]);


            $folder = 'ofertas';
            $extension = $request->file('banner')->getClientOriginalExtension();

            $fileName = time() . '_oferta_' . $request->nombre . '.' . $extension;
            $filePath = $request->file('banner')->storeAs('uploads/' . $folder, $fileName, 'public');

            // Eliminar el archivo antiguo si existe
            if ($oferta->banner) {
                Storage::disk('public')->delete('uploads/' . $folder . '/' . $oferta->banner);
            }

            $oferta->banner = $fileName;
        }

        // Crear y persistir nuevo evento
        $oferta->save();


        return redirect()->route('perfil.index');
    }

    public function destroy(Request $request, $id)
    {

        $request->validate([
            'password' => ['required', 'current_password'],
        ]);
        $oferta = Ofertas::find($id);
        $folder = 'ofertas';
        // Eliminar el archivo antiguo si existe
        if ($oferta->banner) {
            Storage::disk('public')->delete('uploads/' . $folder . '/' . $oferta->banner);
        }
        $oferta->delete();
        return redirect()->route('perfil.index')
            ->with('success', 'Recurso eliminado exitosamente');
    }

    /**
     * SHOW OFERTA EN NAV OFERTAS
     */
    public function ofertas()
    {
        $puntosID = [];
        $puntos = Puntos::where('id_user', Auth::id())->get();
        if (Auth::user()->roles[0]->name == 'Administrador' || Auth::user()->roles[0]->name == 'Supervisor') {
            $puntos = Puntos::all();

            $puntosID = RequestFacade::input('punto');
        } else {
            $puntosID = $puntos[0]->id;
        }

        return Inertia::render(

            'Ofertas/Index',

            [
                'puntos' => $puntos,
                'oferts' => Ofertas::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('nombre', 'like', '%' . $search . '%');
                    })->when($puntosID, function ($query, $puntosID) {
                        // Filtrar por id_puntos solo si existe un valor en puntosID
                        $query->where('id_puntos', $puntosID);
                    })
                    ->paginate(5)
                    ->withQueryString(),
                'filters' => RequestFacade::only(['search', 'punto'])
            ]
        );
    }
    //Mostrar inscritos
    public function inscritos()
    {
        return Inertia::render(

            'Ofertas/Show',

            [
                'inscripciones' => Inscripciones::Where('id_oferta', RequestFacade::input('id'))->Where('estadoProceso', '!=', 'En proceso')->Where('estadoProceso', '!=', 'Rechazado')->with('info_user')->with('oferta')->paginate(5),
                'certificados' => Inscripciones::Where('id_oferta', RequestFacade::input('id'))->Where('estadoProceso', 'Certificado')->count(),
                'procesos' => Inscripciones::Where('id_oferta', RequestFacade::input('id'))->Where('estadoProceso', 'Inscrito')->count(),
                'noCertificados' => Inscripciones::Where('id_oferta', RequestFacade::input('id'))->Where('estadoProceso', 'No certificado')->count(),
            ]
        );
    }
    //certificar
    public function certificar()
    {
        $ids = RequestFacade::input('ids');
        $inscripciones = Inscripciones::whereIn('id', $ids)->get();

        foreach ($inscripciones as $inscripcion) {
            $inscripcion->estadoProceso = 'Certificado';
            $inscripcion->save();
        }

        return back();
    }
    //cancelar certificado
    public function noCertificar()
    {
        $ids = RequestFacade::input('ids');
        $inscripciones = Inscripciones::whereIn('id', $ids)->get();

        foreach ($inscripciones as $inscripcion) {
            $inscripcion->estadoProceso = 'No certificado';
            $inscripcion->save();
        }

        return back();
    }

    //Mostrar total inscritos
    public function totalInscritos()
    {
        return Inertia::render(

            'Inscripciones/Index',

            [
                'inscripciones' => Inscripciones::Where('estadoProceso', '!=', 'En proceso')->Where('estadoProceso', '!=', 'Rechazado')->with('info_user')->with('oferta')->paginate(5),
                'certificados' => Inscripciones::Where('estadoProceso', 'Certificado')->count(),
                'procesos' => Inscripciones::Where('estadoProceso', 'Inscrito')->count(),
                'noCertificados' => Inscripciones::Where('estadoProceso', 'No certificado')->count(),
            ]
        );
    }

    //cargue masivo inscritos
    public function inscritosMasivos() {

        return Inertia::render(

            'InscripcionesMasivo/Index',
            []
        );

    }

    public function excel()
    {
        ob_end_clean();
        ob_start();

        $puntosID = [];
        $puntos = Puntos::where('id_user', Auth::id())->get();
        if (Auth::user()->roles[0]->name == 'Administrador' || Auth::user()->roles[0]->name == 'Supervisor') {
            $puntosID = RequestFacade::input('punto');
        } else {
            $puntosID = $puntos[0]->id;
        }

        $search = RequestFacade::input('search');


        return Excel::download(new OfertasExports($search, $puntosID), 'ofertas.xls', \Maatwebsite\Excel\Excel::XLS);
    }

    public function excelInscritos()
    {
        ob_end_clean();
        ob_start();

        $search = RequestFacade::input('search');
        $puntosID = RequestFacade::input('punto');

        return Excel::download(new InscritosExports(), 'totalInscritos.xls', \Maatwebsite\Excel\Excel::XLS);
    }

}
