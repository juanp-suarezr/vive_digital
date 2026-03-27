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
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use PhpOffice\PhpSpreadsheet\Shared\Date;

class OfertasExports implements FromCollection, WithHeadings, WithStyles, ShouldAutoSize, WithColumnFormatting
{

    protected $search;
    protected $puntosID;
    protected $estado;
    protected $fechaInicio;
    protected $fechaFin;

    public function __construct($search, $puntosID, $estado, $fechaInicio, $fechaFin)
    {
        $this->search = $search;
        $this->puntosID = $puntosID;
        $this->estado = $estado;
        $this->fechaInicio = $fechaInicio;
        $this->fechaFin = $fechaFin;
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
            })->when($this->estado, function ($query) {
                $query->where('estado', $this->estado);
            })->when($this->fechaInicio && $this->fechaFin, function ($query) {
                $query->whereBetween('created_at', [$this->fechaInicio, $this->fechaFin]);
            })->select(
                'id_puntos',
                'nombre',
                'tipo',
                'horario',
                'descripcion',
                'lugar',
                'estado',
                'created_at'

            )
            ->get();

        // Reemplazar el ID de puntos con el nombre del punto y formatear datos
        $ofertas->transform(function ($oferta) {
            // Reemplazar ID de puntos con nombre
            $oferta->id_puntos = Puntos::where('id', $oferta->id_puntos)->value('nombre') ?? '';

            // Formatear created_at a string legible
            if ($oferta->created_at) {
                $oferta->created_at = $oferta->created_at->format('Y-m-d H:i:s');
            }

            // Sanitizar campos de texto para evitar problemas de codificación
            $oferta->nombre = $this->sanitizeText($oferta->nombre ?? '');
            $oferta->horario = $this->sanitizeText($oferta->horario ?? '');
            $oferta->descripcion = $this->sanitizeText($oferta->descripcion ?? '');
            $oferta->lugar = $this->sanitizeText($oferta->lugar ?? '');
            $oferta->tipo = $this->sanitizeText($oferta->tipo ?? '');
            $oferta->estado = $this->sanitizeText($oferta->estado ?? '');

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
            'Fecha creación'
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
                        'color' => ['rgb' => '000000'],
                    ],
                ],
            ],
        ];
    }

    /**
     * Formato de columnas para evitar problemas con fechas
     */
    public function columnFormats(): array
    {
        return [
            'H' => 'YYYY-MM-DD HH:MM:SS', // Formato para created_at
        ];
    }

    /**
     * Sanitizar texto para evitar problemas de codificación en Excel
     */
    private function sanitizeText($text)
    {
        if (empty($text)) {
            return '';
        }

        // Convertir a UTF-8 si no lo está
        if (!mb_check_encoding($text, 'UTF-8')) {
            $text = mb_convert_encoding($text, 'UTF-8', 'UTF-8');
        }

        // Remover caracteres de control que pueden causar problemas
        $text = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', '', $text);

        // Limitar longitud para evitar problemas con XLS
        if (strlen($text) > 32000) {
            $text = substr($text, 0, 32000) . '...';
        }

        return $text;
    }
}
