<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ofertas extends Model
{
    use HasFactory;

    protected $table = 'ofertas';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'id_puntos',
        'horario',
        'fecha_init',
        'fecha_fin',
        'estado',
        'cupo',
        'tipo',
        
    ];

    public function puntos_vive()
    {
        return $this->hasOne(Puntos::class, 'id', 'id_puntos');
    }
}
