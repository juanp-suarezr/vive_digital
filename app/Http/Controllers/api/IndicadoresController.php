<?php

namespace App\Http\Controllers\api;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Puntos;
use App\Models\Registro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Type\Integer;

class IndicadoresController extends Controller
{

    public function index()
    {
        try {

            $mes = RequestFacade::input('mes');
            $anio = RequestFacade::input('anio');
            $punto = RequestFacade::input('punto');
            $genero = RequestFacade::input('genero');

            $resultados = Registro::query();

            if ($mes && is_numeric($mes) && $mes >= 1 && $mes <= 12) {
                $resultados = $resultados->where(function ($query) use ($mes) {
                    $query->whereMonth('created_at', $mes);
                });
            }

            if ($anio && is_numeric($anio)) {
            $resultados = $resultados->whereYear('created_at', $anio);
        }

            if ($punto) {
                $resultados = $resultados->whereHas('puntos_vive', function ($query) use ($punto) {
                    $query->where('id', $punto);
                });
            }

            if ($genero) {

                $generoValor = $genero == 1 ? 'Masculino' : ($genero == 2 ? 'Femenino' : 'Otro');
                if ($generoValor == 'Otro') {
                    $resultados = $resultados->where(function ($query) {
                        $query->where('genero', '!=', 'Masculino')
                            ->where('genero', '!=', 'Femenino');
                    });
                } else {
                    $resultados = $resultados->where('genero', $generoValor);
                }
            }

            $resultados = $resultados->latest('created_at')->get();

            // Mapear los resultados para incluir el nombre del punto
            $data = $resultados->map(function ($registro) {
                return [
                    'id' => $registro->id,
                    'nombres' => $registro->nombres,
                    'apellidos' => $registro->apellidos,
                    'identificacion' => $registro->identificacion,
                    'genero' => $registro->genero,
                    'edad' => $registro->edad,
                    'telefono' => $registro->telefono,
                    'email' => $registro->email,
                    'comuna' => $registro->comuna,
                    'condicion' => $registro->condicion,
                    'etnia' => $registro->etnia,
                    'nivel_estudio' => $registro->nivel_estudio,
                    'tipo_servicio' => $registro->tipo_servicio,
                    'dignatario' => $registro->dignatario,
                    'id_puntos' => $registro->id_puntos,
                    'punto_nombre' => $this->getNombrePuntos($registro->id_puntos) ?? null,
                    'created_at' => $registro->created_at,
                ];
            });


            return response()->json([
                'status' => true,
                'total' => $resultados->count() . ' Registros obtenidos',
                'data' => $data
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'estado' => 'error',
                'mensaje' => $e->getMessage()
            ], 500);
        }
    }

    private function getNombrePuntos($id_punto)
    {
        $punto = Puntos::query()
            ->select('nombre', 'id')
            ->where('id', $id_punto)
            ->value('nombre');

        return $punto ? $punto : null;
    }
}
