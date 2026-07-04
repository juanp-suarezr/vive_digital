<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class CentralDataService
{
    protected string $baseUrl;
    protected string $slug;
    protected string $secret;

    public function __construct()
    {
        $this->baseUrl = rtrim(env('CENTRAL_DATA_URL', 'http://localhost:8001/api/v1'), '/');
        $this->slug    = env('CENTRAL_DATA_SLUG', 'vive-digital');
        $this->secret  = env('CENTRAL_DATA_SECRET', '');
    }

    protected function token(): string
    {
        return Cache::remember('central_data.token', 3600, function () {
            $response = Http::asJson()->post($this->baseUrl . '/auth/token', [
                'slug'   => $this->slug,
                'secret' => $this->secret,
            ]);

            if (!$response->successful()) {
                throw new \RuntimeException('Error al autenticar con Central Data: ' . $response->body());
            }

            $data = $response->json();

            return $data['access_token'] ?? throw new \RuntimeException('Token no recibido');
        });
    }

    protected function authHeaders(): array
    {
        return [
            'Authorization' => 'Bearer ' . $this->token(),
            'Accept'        => 'application/json',
        ];
    }

    protected function normalizeTipoDocumento(string $tipo): string
    {
        return match (strtoupper($tipo)) {
            'CEDULA_CIUDADANIA' => 'CC',
            'TARJETA_IDENTIDAD' => 'TI',
            'CEDULA_EXTRANJERIA' => 'CE',
            'REGISTRO_CIVIL' => 'RC',
            'PASAPORTE' => 'PP',
            'PERMISO_PROTECCION' => 'PPT',
            'PERMISO_ESPECIAL' => 'PEP',
            'NIT' => 'NIT',
            default => strtoupper($tipo),
        };
    }

    public function find(string $tipoDocumento, string $numeroDocumento): array
    {
        $response = Http::withHeaders($this->authHeaders())
            ->get($this->baseUrl . '/persons/find', [
                'tipo_documento'   => $tipoDocumento,
                'numero_documento' => $numeroDocumento,
            ]);

        if ($response->successful()) {
            $data = $response->json();

            if (isset($data['data']['data']['tipo_documento'])) {
                $data['data']['data']['tipo_documento'] = $this->normalizeTipoDocumento($data['data']['data']['tipo_documento']);
            }

            return [
                'status'  => true,
                'message' => 'Persona encontrada',
                'data'    => $data,
            ];
        }

        return [
            'status'  => false,
            'message' => $response->json('message') ?? 'Persona no encontrada',
            'data'    => null,
        ];
    }

    public function sync(array $payload): array
    {
        $payload['source_project'] = env('CENTRAL_DATA_PROJECT', 'vive-digital');

        if (!empty($payload['tipo_documento'])) {
            $payload['tipo_documento'] = $this->normalizeTipoDocumento($payload['tipo_documento']);
        }

        $response = Http::withHeaders($this->authHeaders())
            ->asJson()
            ->post($this->baseUrl . '/persons/sync', $payload);

        if ($response->successful()) {
            return [
                'status'  => true,
                'message' => 'Sincronización exitosa',
                'data'    => $response->json(),
            ];
        }

        return [
            'status'  => false,
            'message' => $response->json('message') ?? 'Error en sincronización',
            'data'    => null,
        ];
    }
}
