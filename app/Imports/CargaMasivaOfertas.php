<?php

namespace App\Imports;

use App\Models\Ofertas;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;
use PhpOffice\PhpSpreadsheet\Style\Supervisor;


class CargaMasivaOfertas implements ToModel, WithStartRow
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
        if (empty($row[0]) || empty($row[1]) || empty($row[2]) || empty($row[3]) || empty($row[4])) {
            
            return null;
        }

        // Limitar solo a las primeras 5 columnas
        $row = array_slice($row, 0, 5);


        $ofertas = Ofertas::create([
            'nombre' => $row[0],
            'id_puntos' => intval($row[1] ?? 0),
            'horario' => $row[2],
            'descripcion' => $row[3],
            'lugar' => $row[4],
            'estado' => 1,
        ]);



        // Asocia la información del usuario
        $ofertas->save();


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
