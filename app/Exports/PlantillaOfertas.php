<?php

namespace App\Exports;

use App\Models\Puntos;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;

class PlantillaOfertas implements FromCollection, WithHeadings, WithStyles, ShouldAutoSize, WithEvents
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
        return new Collection([
            [
                'nombre' => 'Curso de Programación',
                'id_puntos' => $this->puntosID,
                'horario' => 'Lunes a Viernes, 8:00 AM - 12:00 PM',
                'descripcion' => 'Curso introductorio de programación en Python.',
                'lugar' => 'Salón 201',
            ],
        ]);
    }

    public function headings(): array
    {
        return [
            'nombre',
            'id_puntos',
            'horario',
            'descripcion',
            'lugar',
        ];
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

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $sheet = $event->sheet->getDelegate();

                // Proteger la hoja
                $sheet->getProtection()->setSheet(true);

                // Desbloquear todas las celdas
                $sheet->getStyle('A3:E2000')->getProtection()->setLocked(\PhpOffice\PhpSpreadsheet\Style\Protection::PROTECTION_UNPROTECTED);


                // Agregar una fila adicional con una nota explicativa
                $sheet->insertNewRowBefore(1, 1);
                $sheet->setCellValue('A1', 'Nota: en la fila de id_puntos debe poner el numero que está en la parte derecha del nombre de cada punto vive digital ubicado en el recuadro amarillo.');
                $sheet->mergeCells('A1:E1');

                $sheet->getStyle('A1:E1')->applyFromArray([
                    'font' => ['italic' => true, 'color' => ['rgb' => 'FF0000']],
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => ['rgb' => 'FFFFCC'], // Color de fondo amarillo claro
                    ],
                ]);

                // Bloquear la celda con la nota explicativa
                $sheet->getStyle('A1:E1')->getProtection()->setLocked(\PhpOffice\PhpSpreadsheet\Style\Protection::PROTECTION_PROTECTED);


                // Obtener los puntos
                $puntos = Puntos::select('nombre', 'id')->get();

                // Agregar título y subtítulo
                $sheet->setCellValue('F4', 'PUNTOS VIVE');
                $sheet->setCellValue('G4', 'ID');
                $sheet->getStyle('F4:G4')->applyFromArray([
                    'font' => ['bold' => true, 'size' => 14],
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => ['rgb' => 'FFFF00'], // Color de fondo amarillo
                    ],
                ]);



                // Ajustar el ancho de las columnas para que el texto se ajuste
                $sheet->getColumnDimension('F')->setAutoSize(true);
                $sheet->getColumnDimension('G')->setAutoSize(true);

                // Agregar datos de los puntos
                $row = 5;
                $puntoIds = [];
                foreach ($puntos as $punto) {
                    $sheet->setCellValue('F' . $row, $punto->nombre);
                    $sheet->setCellValue('G' . $row, $punto->id);
                    $puntoIds[] = $punto->id;
                    $row++;
                }

                // Bloquear la celda con la nota explicativa
                $sheet->getStyle('F4:G9')->getProtection()->setLocked(\PhpOffice\PhpSpreadsheet\Style\Protection::PROTECTION_PROTECTED);


                // Aplicar estilo a las celdas de los puntos
                $sheet->getStyle('F5:G' . ($row - 1))->applyFromArray([
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => ['rgb' => 'FFFF00'], // Color de fondo amarillo
                    ],
                ]);

                // Agregar validación de datos para la columna id_puntos
                $puntoIdsString = implode(',', $puntoIds);
                for ($i = 3; $i <= 3000; $i++) { // Ajustar el índice de fila para la validación
                    $validation = $sheet->getCell('B' . $i)->getDataValidation();
                    $validation->setType(\PhpOffice\PhpSpreadsheet\Cell\DataValidation::TYPE_LIST);
                    $validation->setErrorStyle(\PhpOffice\PhpSpreadsheet\Cell\DataValidation::STYLE_STOP);
                    $validation->setAllowBlank(true);
                    $validation->setShowInputMessage(true);
                    $validation->setShowErrorMessage(true);
                    $validation->setErrorTitle('Error de entrada');
                    $validation->setError('Solo se permiten los IDs de los puntos.');
                    $validation->setPromptTitle('Entrada de ID');
                    $validation->setPrompt('Por favor, ingrese un ID de punto válido.');
                    $validation->setFormula1('"' . $puntoIdsString . '"');
                }
            },
        ];


    }
}
