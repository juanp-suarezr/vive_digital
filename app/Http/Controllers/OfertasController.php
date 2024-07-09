<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Ofertas;
use App\Models\Perfil;
use App\Models\Puntos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

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
        if (Auth::user()->roles[0]->name == 'Administrador') {
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
            'tipo' => 'required|string',
            'horario' => 'required|string|max:100',
            'jornada' => 'required|string|max:100',
            'lugar' => 'string|max:100',
            'fecha_init' => 'required|string|max:255',
            'fecha_fin' => 'required|string|max:255',
            'cupo' => 'required',
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
            'tipo' => $request->input('tipo'),
            'horario' => $request->input('horario'),
            'jornada' => $request->input('jornada'),
            'lugar' => $request->input('lugar'),
            'fecha_init' => $request->input('fecha_init'),
            'fecha_fin' => $request->input('fecha_fin'),
            'cupo' => $request->input('cupo'),
            'banner' => $fileName,

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
            'tipo' => 'required|string',
            'horario' => 'required|string|max:100',
            'jornada' => 'required|string|max:100',
            'lugar' => '',
            'fecha_init' => 'required|string|max:255',
            'fecha_fin' => 'required|string|max:255',
            'cupo' => 'required',
            'estado' => 'required',


        ]);

        $oferta = Ofertas::where('id', $request->id)->first();
        $oferta->nombre = $request->nombre;
        $oferta->tipo = $request->tipo;
        $oferta->horario = $request->horario;
        $oferta->jornada = $request->jornada;
        $oferta->lugar = $request->lugar;
        $oferta->fecha_init = $request->fecha_init;
        $oferta->fecha_fin = $request->fecha_fin;
        $oferta->cupo = $request->cupo;
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

    public function destroy(Request $request,$id){

        $request->validate([
            'password' => ['required', 'current_password'],
        ]);
        Ofertas::where('id', $id)->delete();
        return redirect()->route('perfil.index')
            ->with('success', 'Recurso eliminado exitosamente');
    }
}
