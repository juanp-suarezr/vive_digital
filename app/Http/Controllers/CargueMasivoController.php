<?php

namespace App\Http\Controllers;

use App\Exports\PlantillaOfertas;
use App\Imports\CargaMasivaOfertas;
use Illuminate\Http\Request;
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

}
