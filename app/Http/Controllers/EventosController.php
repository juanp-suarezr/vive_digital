<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Eventos;
use App\Models\Perfil;
use App\Models\Puntos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EventosController extends Controller
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
    

    public function create(Request $request)
    {

        return Inertia::render('Perfil/AddEvents', [
            'punto_id' => $request->id,
        ]);
    }

    public function store(Request $request)
    {

        $this->validate($request, [
            'nombre' => 'required|string',
            'link' => '',
            'descripcion' => 'max:300',
            'tipo' => 'required|string',
        ]);

        $fileName = 'NA';

        if ($request->banner) {

            $request->validate([

                'banner' => 'mimes:jpg,png,jpeg,gif,bmp,tiff,svg,web,webp|max:2048',

            ]);


            $folder = 'eventos';
            $extension = $request->file('banner')->getClientOriginalExtension();

            $fileName = time() . '_eventos_' . $request->nombre . '.' . $extension;
            $filePath = $request->file('banner')->storeAs('uploads/' . $folder, $fileName, 'public');
        }

        $eventos = Eventos::create([
            'id_puntos' => $request->input('id_puntos'),
            'nombre' => $request->input('nombre'),
            'tipo' => $request->input('tipo'),
            'descripcion' => $request->input('descripcion'),
            'link' => $request->input('link'),
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
        $evento = Eventos::find($id);

        return Inertia::render('Perfil/EditEvents', compact('evento'));
    }

    public function actuEvents(Request $request)
    {

        $request->validate([
            'nombre' => 'required|string',
            'tipo' => 'required|string',
            'descripcion' => 'string|max:300',
            'link' => 'string',
            'estado' => 'required',


        ]);

        $eventos = Eventos::where('id', $request->id)->first();
        $eventos->nombre = $request->nombre;
        $eventos->tipo = $request->tipo;
        $eventos->descripcion = $request->descripcion;
        $eventos->link = $request->link;
        $eventos->estado = $request->estado;

        

        if ($request->banner != 'NA') {


            $request->validate([

                'banner' => 'mimes:jpg,png,jpeg,gif,bmp,tiff,svg,web,webp|max:2048',

            ]);


            $folder = 'eventos';
            $extension = $request->file('banner')->getClientOriginalExtension();

            $fileName = time() . '_eventos_' . $request->nombre . '.' . $extension;
            $filePath = $request->file('banner')->storeAs('uploads/' . $folder, $fileName, 'public');

            // Eliminar el archivo antiguo si existe
            if ($eventos->banner) {
                Storage::disk('public')->delete('uploads/' . $folder . '/' . $eventos->banner);
            }

            $eventos->banner = $fileName;
        }

        // Crear y persistir nuevo evento
        $eventos->save();


        return redirect()->route('perfil.index');
    }

    public function destroy(Request $request,$id){

        $request->validate([
            'password' => ['required', 'current_password'],
        ]);
        Eventos::where('id', $id)->delete();
        return redirect()->route('perfil.index')
            ->with('success', 'Recurso eliminado exitosamente');
    }
}
