<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Informacion_inicial extends Model
{
    use HasFactory;

    protected $table = 'informacion_inicial';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'id_puntos',
        'descripcion',
        'horario',
        'instagram',
        'youtube',
        'facebook',
        'banner',
        
    ];

    public function puntos_vive()
    {
        return $this->hasOne(Puntos::class, 'id', 'id_puntos');
    }
}
