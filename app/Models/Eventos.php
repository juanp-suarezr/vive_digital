<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eventos extends Model
{
    use HasFactory;

    protected $table = 'eventos';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'id_puntos',
        'descripcion',
        'estado',
        'tipo',
        'banner',
        'link',
        
    ];

    public function puntos_vive()
    {
        return $this->hasOne(Puntos::class, 'id', 'id_puntos');
    }
}
