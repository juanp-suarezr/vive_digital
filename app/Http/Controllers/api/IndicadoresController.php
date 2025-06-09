<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Registro;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IndicadoresController extends Controller
{

    public function index(Request $request)
    {
        try {
            $resultados = Registro::get();


            return response()->json([
                'status' => true,
                'message' => "success",
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
