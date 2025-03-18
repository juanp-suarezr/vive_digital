<?php

namespace App\Imports;

use App\Jobs\SendInscriptionApprovedMail;
use App\Models\Info_usuario;
use App\Models\Inscripciones;
use App\Models\Ofertas;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;
use PhpOffice\PhpSpreadsheet\Style\Supervisor;

class CargaMasivaInscritos implements ToModel, WithStartRow
{
    private $numRegistrosInsertados = 0;
    private $numRegistrosActualizados = 0;
    private $identificacionesNoRegistradas = [];

    /**
     * @param array $row
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {
        // Convertir a array numérico y filtrar espacios en blanco
        $row = array_map('trim', array_values($row));

        // Asegurarse de que la fila no esté vacía
        if (empty($row[0]) || empty($row[1]) || empty($row[2])) {
            $this->identificacionesNoRegistradas[] = $row[0] ?? 'N/A';
            return null;
        }

        // Limitar solo a las primeras 3 columnas
        $row = array_slice($row, 0, 3);

        // Traer la info del usuario inscrito
        $info_user = Info_usuario::select('id')
            ->where('edad', '>', 14)
            ->where('identificacion', $row[0])
            ->first();

        // Validar si hay info de usuario
        if (!$info_user) {
            $this->identificacionesNoRegistradas[] = $row[0];
            return null;
        }

        // Traer las inscripciones según usuario
        $inscripciones = Inscripciones::select('id', 'estadoProceso')
            ->where('id_info_user', $info_user->id)
            ->where('id_oferta', $row[1])->with('info_user')
            ->with('oferta')
            ->first();

        // Validar si el usuario ya está inscrito en estado diferente a "En proceso"
        if ($inscripciones && ($inscripciones->estadoProceso != 'En proceso' || $inscripciones->estadoProceso == 'Rechazado')) {
            $this->identificacionesNoRegistradas[] = $row[0];
            return null;
        }

        // Si la inscripción está en estado "En proceso", actualizarla
        if ($inscripciones && ($inscripciones->estadoProceso == 'En proceso' || $inscripciones->estadoProceso == 'Rechazado') ) {
            $inscripciones->estadoProceso = $row[2];
            $inscripciones->save();
            $this->numRegistrosActualizados++;
        } else {
            // Crear la inscripción
            $inscripciones = Inscripciones::create([
                'identificacion' => $row[0],
                'id_oferta' => intval($row[1] ?? 0),
                'id_info_user' => $info_user->id,
                'estadoProceso' => $row[2],
            ]);

            // Asocia la información del usuario
            $inscripciones->save();

            if ($inscripciones) {
                if ($inscripciones->estadoProceso == 'Inscrito') {
                    $oferta = Ofertas::select('nombre')
                        ->where('id', $inscripciones->id_oferta)
                        ->first();

                    // Enviar el correo electrónico utilizando colas
                    SendInscriptionApprovedMail::dispatch($inscripciones, $oferta);
                }
            }

            // Incrementar el contador de registros insertados correctamente
            $this->numRegistrosInsertados++;
        }
    }

    public function getNumRegistrosInsertados()
    {
        return $this->numRegistrosInsertados;
    }

    public function getNumRegistrosActualizados()
    {
        return $this->numRegistrosActualizados;
    }

    public function getIdentificacionesNoRegistradas()
    {
        return $this->identificacionesNoRegistradas;
    }

    /**
     * @return int
     */
    public function startRow(): int
    {
        return 3; // Los encabezados están en la segunda fila
    }
}
