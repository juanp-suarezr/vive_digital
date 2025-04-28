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

class InscritosExports implements FromCollection, WithHeadings, WithStyles, ShouldAutoSize
{


    protected $puntosID;

    public function __construct($puntosID)
    {
        $this->puntosID = $puntosID;
    }

    /**
     * @return \Illuminate\Support\Collection
     */

    public function collection()
    {

        $inscripciones = Inscripciones::query()->when($this->puntosID, function ($query, $puntosID) {
            $query->whereHas('oferta', function ($subQuery) use ($puntosID) {
                $subQuery->where('id_puntos', $puntosID); // Filtrar por puntosID
            });
        })->with('info_user')->with('oferta')->select(
            'comentario',
            'created_at',
            'id_info_user',
            'identificacion',
            'id_oferta',
            'estadoProceso',
        )
            ->get();



        // Reemplazar el ID de puntos con el nombre del punto
        $inscripciones->transform(function ($ins) {
            $ins->comentario = $ins->oferta->nombre ?? '';
            $ins->created_at = Puntos::where('id', $ins->oferta->id_puntos)->value('nombre') ?? '';
            $ins->id_info_user = $ins->info_user->nombres. ' '.$ins->info_user->apellidos ?? '';
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
            'Identificación',
            'id_oferta'
            'Estado',
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
