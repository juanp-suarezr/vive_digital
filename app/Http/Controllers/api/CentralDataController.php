<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\CentralDataService;
use Illuminate\Http\Request;

class CentralDataController extends Controller
{
    protected CentralDataService $service;

    public function __construct(CentralDataService $service)
    {
        $this->service = $service;
    }

    public function find(Request $request)
    {
        $request->validate([
            'tipo_documento'   => 'required|string',
            'numero_documento' => 'required|string',
        ]);

        $result = $this->service->find(
            $request->input('tipo_documento'),
            $request->input('numero_documento')
        );

        return response()->json($result, $result['status'] ? 200 : 404);
    }

    public function sync(Request $request)
    {
        $payload = $request->validate([
            'tipo_documento'    => 'required|string',
            'numero_documento'  => 'required|string',
            'nombres'           => 'required|string',
            'apellidos'         => 'required|string',
            'fecha_nacimiento'  => 'nullable|date',
            'genero'            => 'nullable|string',
            'correo'            => 'nullable|email',
            'telefono'          => 'nullable|string',
            'direccion'         => 'nullable|array',
            'source_project'    => 'nullable|string',
        ]);

        $result = $this->service->sync($payload);

        return response()->json($result, $result['status'] ? 201 : 422);
    }
}
