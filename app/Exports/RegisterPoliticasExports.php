<?php

namespace App\Exports;

use App\Models\Registro;
use DB;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithHeadings;

class RegisterPoliticasExports implements FromCollection, WithHeadings, WithStyles, ShouldAutoSize
{

    protected $startDate;
    protected $endDate;

    public function __construct($startDate, $endDate)
    {
        $this->startDate = $startDate;
        $this->endDate = $endDate;
    }

    // Limpia los datos eliminando emojis y caracteres especiales
    private function removeEmojis($string)
    {
        // Elimina emojis y caracteres no compatibles
        return preg_replace('/[^\x{0000}-\x{FFFF}]/u', '', $string);
    }

    // obtener nombres reales de etnias
    private function getRealNameEtnia($string)
    {

        // Arreglo de etnias
        switch ($string) {
            case "NA":
                return "No aplica";
                break;
            case "mestizo":
                return "Mestizo";
                break;
            case "afro":
                return "Afrodescendiente";
                break;
            case "indigena":
                return "Indigena";
                break;
            case "palanquero":
                return "Palanquero";
                break;
            case "rom":
                return "R-rom";
                break;
            default:
                return "Desconocido";
                break;
        }
    }

    //obtener nombres reales de condicion
    private function getRealNameCondicion($string)
    {

        switch ($string) {
            case "NA":
                return "Ninguna";
                break;
            case "discapacitado":
                return "Discapacitado";
                break;
            case "desplazados":
                return "Desplazados";
                break;
            case "victimasConfArm":
                return "Victima";
                break;
            case "mujerCabHogar":
                return "Padre / Madre cabeza de hogar";
                break;
            case "hombreCabHogar":
                return "Padre / Madre cabeza de hogar";
                break;
            case "habitanteCalle":
                return "Habitante de calle";
                break;
            case "migrante":
                return "Migrante";
                break;
            case "diversidadSex":
                return "Diversidad sexual";
                break;
            default:
                return "Desconocido";
                break;
        }
    }

    //obtener genero diverso
    private function getRealNameGenero($string)
    {

        if ($string !== "Masculino" && $string !== "Femenino") {
            return "Genero Diverso";
        } else {
            return $string;
        }
    }

    //obtener nombres reales de nivel educacion
    private function getRealNameNivelEducacion($string)
    {


        switch ($string) {
            case "NA":
                return "Ninguna de las anteriores";
                break;
            case "primaria":
                return "Básica primaria";
                break;
            case "secundaria":
                return "Básica secundaria";
                break;
            case "tecnico":
                return "Profesional, técnico o tecnólogo";
                break;
            case "tecnologico":
                return "Profesional, técnico o tecnólogo";
                break;
            case "universitario":
                return "Profesional, técnico o tecnólogo";
                break;
            case "postgrado":
                return "Postgrado";
                break;
            default:
                return "Desconocido";
                break;
        }
    }

    //obtener nombres reales de tipo servicio
    private function getRealNameTipoServicio($string)
    {


        switch ($string) {
            case "Uso internet-estudio":
                return "Estudio";
                break;
            case "Uso internet-ocio":
                return "Entrentenimiento";
                break;
            case "capacitaciones":
                return "Capacitaciones";
                break;
            case "prestamo aulas":
                return "Estudio";
                break;
            case "tramites":
                return "Otros";
                break;
            case "videojuegos":
                return "Videojuegos";
                break;
            default:
                return "Otros";
                break;
        }
    }

    /**
     * @return \Illuminate\Support\Collection
     */

    public function collection()
    {
        $users = Registro::whereHas('puntos_vive', function ($query) {
            $query->where('id_user', Auth::id()); // Filtrar por el ID del usuario autenticado
        })->when($this->startDate || $this->endDate, function ($query) {
            $fecha_init = $this->startDate;
            $fecha_end = $this->endDate;

            if ($fecha_end == null) {
                $fecha_end = date('Y-m-d');
            }

            $query->whereBetween('created_at', [$fecha_init, $fecha_end]);
        })
            ->with('puntos_vive')
            ->select(
                'nombres',
                'apellidos',
                'edad',
                'tipo_documento',
                'identificacion',
                'direccion',
                'comuna',
                'sector',
                'telefono',
                'email',
                'genero',
                'condicion',
                'etnia',
                'nivel_estudio',
                'tipo_servicio',
                'dignatario',
                'id_puntos', // Necesario para la relación
                'created_at'
            )
            ->latest('created_at')
            ->get();

        if ($users->isEmpty()) {
            $users = Registro::when($this->startDate || $this->endDate, function ($query) {
                $fecha_init = $this->startDate;
                $fecha_end = $this->endDate;

                if ($fecha_end == null) {
                    $fecha_end = date('Y-m-d');
                }

                $query->whereBetween('created_at', [$fecha_init, $fecha_end]);
            })->with('puntos_vive')
                ->select(
                    'nombres',
                    'apellidos',
                    'edad',
                    'tipo_documento',
                    'identificacion',
                    'direccion',
                    'comuna',
                    'sector',
                    'telefono',
                    'email',
                    'genero',
                    'condicion',
                    'etnia',
                    'nivel_estudio',
                    'tipo_servicio',
                    'dignatario',
                    'id_puntos', // Necesario para la relación
                    'created_at'
                )
                ->latest('created_at')
                ->get();
        }

        // Reemplazar el ID de puntos con el nombre del punto
        $users->transform(function ($user) {
            $user->nombres = $this->removeEmojis($user->nombres);
            $user->apellidos = $this->removeEmojis($user->apellidos);
            $user->direccion = $this->removeEmojis($user->direccion);
            $user->sector = $this->removeEmojis($user->sector);
            $user->email = $this->removeEmojis($user->email);
            $user->genero = $this->getRealNameGenero($user->genero);
            $user->condicion = $this->getRealNameCondicion($user->condicion);
            $user->etnia = $this->getRealNameEtnia($user->etnia);
            $user->nivel_estudio = $this->getRealNameNivelEducacion($user->nivel_estudio);
            $user->tipo_servicio = $this->getRealNameTipoServicio($user->tipo_servicio);


            $user->id_puntos = $user->puntos_vive->identificador_politicas ?? ''; // Asignar el nombre del punto o cadena vacía si no hay punto
            // $user->created_at = \PhpOffice\PhpSpreadsheet\Shared\Date::PHPToExcel( $user->created_at );
            unset($user->puntos_vive); // Eliminar la relación ya que no la necesitamos en la exportación
            return $user;
        });



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
        $firstRow = $this->collection()->first();
        return $firstRow ? array_keys($firstRow->toArray()) : [
            'nombres',
            'apellidos',
            'edad',
            'tipo_documento',
            'identificacion',
            'direccion',
            'comuna',
            'sector',
            'telefono',
            'email',
            'genero',
            'condicion',
            'etnia',
            'nivel_estudio',
            'tipo_servicio',
            'dignatario',
            'punto',
            'fecha_registro'
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
}
