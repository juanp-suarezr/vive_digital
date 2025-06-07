<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Satisfaccion extends Model
{
    use HasFactory;

    protected $table = 'satisfaccion';


    protected $fillable = [
        'id_punto',
        'motivo_visita',
        'velocidad_internet',
        'disponibilidad_equipos',
        'funcionamiento_equipos',
        'capacidad_administrador',
        'amabilidad_administrador',
        'publicidad_servicios',
        'identificacion',
        'nombre'
    ];

    public function puntos_vive()
    {
        return $this->hasOne(Puntos::class, 'id', 'id_punto');
    }

}
