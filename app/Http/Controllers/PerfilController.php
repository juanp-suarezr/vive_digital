<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Puntos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PerfilController extends Controller
{
    public function index()
    {
        return Inertia::render(

            'Perfil/Index',

            [
                'punto' => Puntos::where('id_user', Auth::id()),
            ]
        );
    }
}
