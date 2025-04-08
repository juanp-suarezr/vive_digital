<?php

namespace App\Exports;

use App\Models\Info_usuario;
use App\Models\Registro;
use DB;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithHeadings;

class RegisterUnicosExports implements FromCollection, WithHeadings, WithStyles, ShouldAutoSize
{

    protected $startDate;
    protected $endDate;

    public function __construct($startDate, $endDate)
    {
        $this->startDate = $startDate;
        $this->endDate = $endDate;
    }

    /**
     * @return \Illuminate\Support\Collection
     */

    public function collection()
    {
        $users = Info_usuario::when($this->startDate || $this->endDate, function ($query) {
            $fecha_init = $this->startDate;
            $fecha_end = $this->endDate;

            if($fecha_end == null) {
                $fecha_end = date('Y-m-d');
            }

            $query->whereBetween('created_at', [$fecha_init, $fecha_end]);
        })
            ->select(
                'nombres',
                'apellidos',
                'edad',
                'tipo_documento',
                'identificacion',
                'direccion',
                'sector',
                'telefono',
                'email',
                'genero',
                'condicion',
                'etnia',
                'nivel_estudio',
                'created_at'
            )
            ->latest('created_at')
            ->get();

            if ($users->isEmpty()) {
                $users = Info_usuario::when($this->startDate || $this->endDate, function ($query) {
                    $fecha_init = $this->startDate;
                    $fecha_end = $this->endDate;

                    if($fecha_end == null) {
                        $fecha_end = date('Y-m-d');
                    }

                    $query->whereBetween('created_at', [$fecha_init, $fecha_end]);
                })->select(
                        'nombres',
                        'apellidos',
                        'edad',
                        'tipo_documento',
                        'identificacion',
                        'direccion',
                        'sector',
                        'telefono',
                        'email',
                        'genero',
                        'condicion',
                        'etnia',
                        'nivel_estudio',
                        'created_at'
                    )
                    ->latest('created_at')
                    ->get();
            }


        return $users;
    }

    public function headings(): array
    {
        // return [
        //     'nombres',
        //     'apellidos',
        //     'edad',
        //     'tipo_documento',
        //     'identificacion',
        //     'direccion',
        //     'sector',
        //     'telefono',
        //     'email',
        //     'genero',
        //     'condicion',
        //     'etnia',
        //     'nivel_estudio',
        //     'punto',
        //     'fecha_registro'
        // ];
        return array_keys($this->collection()->first()->toArray());
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
