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

    public function __construct($search, $startDate, $endDate, $puntosID)
    {
        $this->search = $search;
        $this->startDate = $startDate;
        $this->endDate = $endDate;
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
            })->when($this->startDate || $this->endDate, function ($query) {

                $fecha_init = $this->startDate;
                $fecha_end = $this->endDate ?? date('Y-m-d');

                // Filtrar ofertas donde la fecha de inicio o fin esté dentro del rango especificado
                $query->where(function ($query) use ($fecha_init, $fecha_end) {
                    $query->whereBetween('fecha_init', [$fecha_init, $fecha_end])
                        ->orWhereBetween('fecha_fin', [$fecha_init, $fecha_end]);
                });
            })->when($this->puntosID, function ($query) {
                // Filtrar por id_puntos solo si existe un valor en puntosID
                $query->where('id_puntos', $this->puntosID);
            })->select(
                'id_puntos',
                'nombre',
                'tipo',
                'horario',
                'jornada',
                'lugar',
                'fecha_init',
                'fecha_fin',
                'cupo',
                'estado',

            )
            ->get();



        // Reemplazar el ID de puntos con el nombre del punto
        $ofertas->transform(function ($oferta) {
            $oferta->id_puntos = Puntos::where('id', $oferta->id_puntos)->value('nombre') ?? ''; // Asignar el nombre del punto o cadena vacía si no hay punto

            $oferta->estado = $oferta->estado == 1 ? 'Activo' : 'Bloqueado';
            // Formatear las fechas para que tengan un formato más amigable (ejemplo: 15 de octubre, 2024)
            $oferta->fecha_init = \Carbon\Carbon::parse($oferta->fecha_init)->translatedFormat('d \d\e F, Y');
            $oferta->fecha_fin = \Carbon\Carbon::parse($oferta->fecha_fin)->translatedFormat('d \d\e F, Y');

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
            'Horario',
            'Jornada',
            'Lugar',
            'Fecha inicio',
            'Fecha fin',
            'Cupo',
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
