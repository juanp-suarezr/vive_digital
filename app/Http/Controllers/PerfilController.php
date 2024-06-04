<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Perfil;
use App\Models\Puntos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
                ->when(RequestFacade::input('search'),function($query, $search) {
                    $query->where('id','like','%'.$search.'%');
                })->orWhere('id_punto', $puntosID)
                ->with('punto')->paginate(5)
                ->withQueryString(),
            ]
        );
    }
}
