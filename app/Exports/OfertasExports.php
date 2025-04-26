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

class OfertasExports implements FromCollection, WithHeadings, WithStyles, ShouldAutoSize
{

    protected $search;
    protected $startDate;
    protected $endDate;
    protected $puntosID;

    public function __construct($search, $puntosID)
    {
        $this->search = $search;
        $this->puntosID = $puntosID;
    }

    /**
     * @return \Illuminate\Support\Collection
     */

    public function collection()
    {
        $ofertas = Ofertas::query()
            ->when($this->search, function ($query) {
                $query->where('nombre', 'like', '%' . $this->search . '%');
            })->when($this->puntosID, function ($query) {
                // Filtrar por id_puntos solo si existe un valor en puntosID
                $query->where('id_puntos', $this->puntosID);
            })->select(
                'id_puntos',
                'nombre',
                'tipo',
                'horario',
                'descripcion',
                'lugar',
                'estado',

            )
            ->get();



        // Reemplazar el ID de puntos con el nombre del punto
        $ofertas->transform(function ($oferta) {
            $oferta->id_puntos = Puntos::where('id', $oferta->id_puntos)->value('nombre') ?? ''; // Asignar el nombre del punto o cadena vacía si no hay punto


            return $oferta;
        });



        return $ofertas;
    }

    public function headings(): array
    {
        return [
            'Punto vive digital',
            'Nombre oferta',
            'Tipo oferta',
            'Información horario',
            'Descripción',
            'Lugar',
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
