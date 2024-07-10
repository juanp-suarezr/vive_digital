<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
    use HasFactory;


    protected $table = 'perfil';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'descripcion',
        'telefono',
        'celular',
        'email',
        'instagram',
        'facebook',
        'twitter',
        'banner',
    ];

    public function punto()
    {
        return $this->hasOne(Puntos::class, 'id', 'id_punto');
    }

}
