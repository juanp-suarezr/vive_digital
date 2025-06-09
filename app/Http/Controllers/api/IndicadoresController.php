<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Registro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndicadoresController extends Controller
{

    public function index()
    {
        try {

            $mes = RequestFacade::input('mes');
            $punto = RequestFacade::input('punto');
            $genero = RequestFacade::input('genero');

            $resultados = Registro::query();

            if ($mes) {
            $resultados = $resultados->where(function ($query) use ($mes) {
                $query->where('nombres', 'like', '%' . $mes . '%')
                    ->orWhere('apellidos', 'like', '%' . $mes . '%')
                    ->orWhere('identificacion', 'like', '%' . $mes . '%');
            });
        }

        if ($punto) {
            $resultados = $resultados->whereHas('puntos_vive', function ($query) use ($punto) {
                $query->where('id', $punto);
            });
        }

        if ($genero) {

            $genero = 1 ? 'Masculino' : $genero = 2 ? 'Femenino' : 'Otro';
            
            if ($genero == 'Otro') {
                $resultados = $resultados->where(function ($query) use ($genero) {
                $query->where('genero', '!=', 'Masculino')
                ->AndWhere('genero', '!=', 'Femenino');
            });
            } else {
                $resultados = $resultados->whereHas('puntos_vive', function ($query) use ($genero) {
                $query->where('genero', $genero);
            });
            }

        }

        $resultados = $resultados->latest('created_at')->get();


            return response()->json([
                'status' => true,
                'total' => $resultados->count() . ' Registros obtenidos',
                'data' => $resultados
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'estado' => 'error',
                'mensaje' => $e->getMessage()
            ], 500);
        }
    }
}
