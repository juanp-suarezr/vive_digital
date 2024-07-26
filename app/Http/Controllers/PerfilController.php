<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Eventos;
use App\Models\Ofertas;
use App\Models\Perfil;
use App\Models\Puntos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PerfilController extends Controller
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
                'eventos' => Eventos::query()
                    ->when(RequestFacade::input('search'), function ($query, $search) {
                        $query->where('id_puntos', $search);
                    })->orWhere('id_puntos', $puntosID)
                    ->get(),
            ]
        );
    }

    public function store(Request $request)
    {

        $perfil = Perfil::where('id_punto', $request->id)->first();
        //subir file
        if ($request->banner) {

            $request->validate([

                'banner' => 'mimes:jpg,png,jpeg,gif,bmp,tiff,svg,web,webp|max:2048',

            ]);


            $folder = 'banners';
            $extension = $request->file('banner')->getClientOriginalExtension();

            $fileName = time() . '_banner_' . $request->code . '.' . $extension;
            $filePath = $request->file('banner')->storeAs('uploads/' . $folder, $fileName, 'public');

            // Eliminar el archivo antiguo si existe
            if ($perfil->banner) {
                Storage::disk('public')->delete('uploads/' . $folder . '/' . $perfil->banner);
            }

            $perfil->banner = $fileName;
        }

        // Crear y persistir nuevo evento
        $perfil->save();


        return redirect()->route('perfil.index');
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
