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
    /**
     * @param array $row*
     * @return \Illuminate\Database\Eloquent\Model|null
     * */

    public function model(array $row)
    {
        // Convertir a array numérico y filtrar espacios en blanco
        $row = array_map('trim', array_values($row));

        // Asegurarse de que la fila no esté vacía
        if (empty($row[0]) || empty($row[1]) ) {

            return null;
        }

        // Limitar solo a las primeras 5 columnas
        $row = array_slice($row, 0, 2);

        // Traer la info del usuario inscrito
        $info_user = Info_usuario::select('id')
            ->where('edad', '>', 14)
            ->where('identificacion', $row[0])
            ->first();


        //VALIDACIONES
        //validar si hay info de usuario
        if (!$info_user) {
            return null;
        }

        // Traer las inscripciones según usuario
        $inscripciones = Inscripciones::select('id_oferta')
            ->where('estadoProceso', '!=', 'Rechazado')
            ->where('id_info_user', $info_user->id)
            ->where('id_oferta', $row[1])
            ->with('info_user')
            ->with('oferta')
            ->first();
            


        //validar si el usuario ya esta inscrito
        if ($inscripciones) {
            return null;
        }


        $inscripciones = Inscripciones::create([
            'identificacion' => $row[0],
            'id_oferta' => intval($row[1] ?? 0),
            'id_info_user' => $info_user->id,
            'estadoProceso' => 'Inscrito',
        ]);



        // Asocia la información del usuario
        $inscripciones->save();

        if ($inscripciones) {

            // Enviar el correo electrónico utilizando colas
            SendInscriptionApprovedMail::dispatch($inscripciones);
        }


        // Incrementar el contador de registros insertados correctamente
        $this->numRegistrosInsertados++;
    }

    public function getNumRegistrosInsertados()
    {
        return $this->numRegistrosInsertados;
    }

    public function getNumRegistrosActualizados()
    {
        return $this->numRegistrosActualizados;
    }

    /**
     * @return int
     */
    public function startRow(): int
    {
        return 3; // Los encabezados están en la segunda fila
    }
}
