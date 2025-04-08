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

class PlantillaInscripciones implements FromCollection, WithHeadings, WithStyles, ShouldAutoSize, WithEvents
{
    protected $ofertas;

    public function __construct($ofertas)
    {
        $this->ofertas = $ofertas;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return new Collection([
            [
                'identificacion' => '1004734004',
                'id_oferta' => $this->ofertas[0]->id,
                'estado_inscripcion' => 'En proceso',
            ],
        ]);
    }

    public function headings(): array
    {
        return [
            'identificacion',
            'id_oferta',
            'estado_inscripcion',
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
                $sheet->getStyle('A2:C10000')->getProtection()->setLocked(\PhpOffice\PhpSpreadsheet\Style\Protection::PROTECTION_UNPROTECTED);

                // Agregar una fila adicional con una nota explicativa
                $sheet->insertNewRowBefore(1, 1);
                $sheet->setCellValue('A1', 'Nota: en la fila de id_oferta debe poner el numero que está en la parte derecha del nombre de cada oferta ubicado en el recuadro amarillo.');
                $sheet->mergeCells('A1:J1');

                $sheet->getStyle('A1:J1')->applyFromArray([
                    'font' => ['italic' => true, 'color' => ['rgb' => 'FF0000']],
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => ['rgb' => 'FFFFCC'], // Color de fondo amarillo claro
                    ],
                ]);

                // Bloquear la celda con la nota explicativa
                $sheet->getStyle('A1:J1')->getProtection()->setLocked(\PhpOffice\PhpSpreadsheet\Style\Protection::PROTECTION_PROTECTED);

                // Obtener las ofertas
                $ofertas = $this->ofertas;

                // Agregar título y subtítulo
                $sheet->setCellValue('E3', 'OFERTAS');
                $sheet->setCellValue('F3', 'ID');
                $sheet->getStyle('E3:F3')->applyFromArray([
                    'font' => ['bold' => true, 'size' => 14],
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => ['rgb' => 'FFFF00'], // Color de fondo amarillo
                    ],
                ]);

                // Ajustar el ancho de las columnas para que el texto se ajuste
                $sheet->getColumnDimension('E')->setAutoSize(true);
                $sheet->getColumnDimension('F')->setAutoSize(true);

                // Agregar datos de las ofertas
                $row = 4;
                $ofertaID = [];
                foreach ($ofertas as $oferta) {
                    $sheet->setCellValue('E' . $row, $oferta->nombre);
                    $sheet->setCellValue('F' . $row, $oferta->id);
                    $ofertaID[] = $oferta->id;
                    $row++;
                }

                // Bloquear las celdas de las ofertas
                $sheet->getStyle('E3:F' . ($row - 1))->getProtection()->setLocked(\PhpOffice\PhpSpreadsheet\Style\Protection::PROTECTION_PROTECTED);

                // Aplicar estilo a las celdas de las ofertas
                $sheet->getStyle('E4:F' . ($row - 1))->applyFromArray([
                    'fill' => [
                        'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                        'startColor' => ['rgb' => 'FFFF00'], // Color de fondo amarillo
                    ],
                ]);

                // Agregar validación de datos para la columna id_oferta
                $ofertaIDString = implode(',', $ofertaID);
                for ($i = 3; $i <= 10000; $i++) { // Ajustar el índice de fila para la validación
                    $validation = $sheet->getCell('B' . $i)->getDataValidation();
                    $validation->setType(\PhpOffice\PhpSpreadsheet\Cell\DataValidation::TYPE_LIST);
                    $validation->setErrorStyle(\PhpOffice\PhpSpreadsheet\Cell\DataValidation::STYLE_STOP);
                    $validation->setAllowBlank(true);
                    $validation->setShowInputMessage(true);
                    $validation->setShowErrorMessage(true);
                    $validation->setErrorTitle('Error de entrada');
                    $validation->setError('Solo se permiten ID de oferta valido.');
                    $validation->setPromptTitle('Entrada de ID');
                    $validation->setPrompt('Por favor, ingrese un ID de oferta valido.');
                    $validation->setFormula1('"' . $ofertaIDString . '"');
                }

                // Agregar validación de datos para la columna estado
                $estadoOptions = '"En proceso,Inscrito,Certificado,No certificado,Rechazado"';
                for ($i = 3; $i <= 10000; $i++) {
                    $validation = $sheet->getCell('C' . $i)->getDataValidation();
                    $validation->setType(\PhpOffice\PhpSpreadsheet\Cell\DataValidation::TYPE_LIST);
                    $validation->setErrorStyle(\PhpOffice\PhpSpreadsheet\Cell\DataValidation::STYLE_STOP);
                    $validation->setAllowBlank(false);
                    $validation->setShowInputMessage(true);
                    $validation->setShowErrorMessage(true);
                    $validation->setErrorTitle('Error de entrada');
                    $validation->setError('Solo se permiten estados válidos.');
                    $validation->setPromptTitle('Entrada de Estado');
                    $validation->setPrompt('Por favor, seleccione un estado válido. entre --> En proceso, Inscrito, Certificado, No certificado, Rechazado');
                    $validation->setFormula1($estadoOptions);

                    // Establecer el valor predeterminado en "En proceso" solo si hay información en la columna A
                    if ($sheet->getCell('A' . $i)->getValue()) {
                        $sheet->setCellValue('C' . $i, 'En proceso');
                    }
                }
            },
        ];
    }
}
