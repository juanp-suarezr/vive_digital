<?php

namespace App\Http\Controllers;

use App\Exports\PlantillaInscripciones;
use App\Exports\PlantillaOfertas;
use App\Imports\CargaMasivaInscritos;
use App\Imports\CargaMasivaOfertas;
use App\Models\Ofertas;
use App\Models\Puntos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Request as RequestFacade;

class CargueMasivoController extends Controller
{

    //PLANTILLA EXCEL OFERTAS
    public function plantillaOF()
    {
        $puntosID = RequestFacade::input('punto');
        return Excel::download(new PlantillaOfertas($puntosID), 'ofertas.xls', \Maatwebsite\Excel\Excel::XLS);
    }

    //FUNCION CARGUE MASIVO OFERTAS
    public function cargueOfertas(Request $request)
    {
        if ($request->file('ofertas')) {
            $file = $request->file('ofertas');



            // Realizar la importación
            $import = new CargaMasivaOfertas();
            Excel::import($import, $file);

            // Obtener el número de registros insertados correctamente
            $numRegistrosInsertados = $import->getNumRegistrosInsertados();

            Log::info($numRegistrosInsertados);
            return back()->with('success', 'Se han cargado ' . $numRegistrosInsertados . ' ofertas correctamente');

        } else {
            Log::error('No se ha seleccionado un archivo para cargar');
            return back();
        }
    }



    //PLANTILLA EXCEL Inscritos
    public function plantillaIns()
    {
        $ofertas = [];
        $puntos = Puntos::where('id_user', Auth::id())->get();
        if (Auth::user()->roles[0]->name == 'Administrador' || Auth::user()->roles[0]->name == 'Supervisor') {
            $ofertas = Ofertas::select('id', 'nombre')->where('estado', 'Activo')->get();
        } else {
            $ofertas = Ofertas::select('id', 'nombre')->where('estado', 'Activo')->where('id_puntos', $puntos[0]->id)->get();

        }


        return Excel::download(new PlantillaInscripciones($ofertas), 'inscritos.xls', \Maatwebsite\Excel\Excel::XLS);
    }


    //FUNCION CARGUE MASIVO INSCRITOS
    public function cargueInscritos(Request $request)
    {
        if ($request->file('inscritos')) {
            $file = $request->file('inscritos');



            // Realizar la importación
            $import = new CargaMasivaInscritos();
            Excel::import($import, $file);

            // Obtener el número de registros insertados correctamente
            $numRegistrosInsertados = $import->getNumRegistrosInsertados();
            $noRegistrados = $import->getIdentificacionesNoRegistradas();

            Log::info($noRegistrados);
            return back()->with('success', 'Se han cargado ' . $numRegistrosInsertados . ' inscritos correctamente. No se han cargado los siguientes registros: ' . implode(', ', $noRegistrados));

        } else {
            Log::error('No se ha seleccionado un archivo para cargar');
            return back();
        }
    }



}
