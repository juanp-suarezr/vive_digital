<?php

namespace App\Exports;

use App\Models\Inscripciones;
use App\Models\Ofertas;
use App\Models\Puntos;
use App\Models\Registro;
use DB;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithHeadings;

class InscritosXOfertaExports implements FromCollection, WithHeadings, WithStyles, ShouldAutoSize
{


    protected $ofertaID;

    public function __construct($ofertaID)
    {
        $this->ofertaID = $ofertaID;
    }

    /**
     * @return \Illuminate\Support\Collection
     */

    public function collection()
    {

        $inscripciones = Inscripciones::query()->when($this->ofertaID, function ($query, $ofertaID) {
            $query->where('id_oferta', $ofertaID); // Filtrar por puntosID
        })->Where('estadoProceso', '!=', 'En proceso')->Where('estadoProceso', '!=', 'Rechazado')->with('info_user')->with('oferta')->select(
            'comentario',
            'created_at',
            'id_info_user',
            'updated_at',
            'identificacion',
            'id_oferta',
            'estadoProceso',
            'created_at',
        )
            ->orderBy('created_at', 'asc') // Ordenar del primer registro al último
            ->get();



        // Reemplazar el ID de puntos con el nombre del punto
        $inscripciones->transform(function ($ins) {
            $ins->comentario = $ins->oferta->nombre ?? '';
            $ins->creacion = $ins->created_at->format('Y-m-d H:i:s') ?? '';
            $ins->created_at = Puntos::where('id', $ins->oferta->id_puntos)->value('nombre') ?? '';
            $ins->id_info_user = $ins->info_user->nombres . ' ' . $ins->info_user->apellidos ?? '';
            $ins->updated_at = $ins->info_user->telefono ?? '';
            $ins->genero = $ins->info_user->genero ?? ''; // ✅ aquí se asigna el género
            unset($ins->oferta); // Eliminar la relación ya que no la necesitamos en la exportación
            unset($ins->info_user);


            return $ins;
        });



        return $inscripciones;
    }

    public function headings(): array
    {
        return [
            'Nombre oferta',
            'Punto vive digital',
            'Nombre inscrito',
            'Teléfono',
            'Identificación',
            'id_oferta',
            'Estado',
            'Fecha de creación',
            'Género'
        ];
        // return array_keys($this->collection()->first()->toArray());
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => [
                'font' => ['bold' => true, 'size' => 14],
                'borders' => [
                    'outline' => [
                        'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                        'color' => ['rgb' => '000000'], // Color de borde negro
                    ],
                ],
            ],
        ];
    }
}
