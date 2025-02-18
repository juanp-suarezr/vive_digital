<?php

namespace App\Jobs;

use App\Models\Ofertas;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Carbon\Carbon;
use App\Events\OfertaActualizada;
use Illuminate\Support\Facades\Log;


class RevisarFechasOfertas implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function handle()
    {
        // Obtener todas las ofertas que todavía están activas (estado = 1)
        $ofertas = Ofertas::where('estado', 1)->get();

        foreach ($ofertas as $oferta) {
            // Verificar si la fecha de inicio ha pasado
            if (Carbon::now()->greaterThanOrEqualTo($oferta->fecha_init)) {
                // Bloquear la oferta
                $oferta->estado = 0;
                $oferta->save();

                // Emitir el evento para actualizar en tiempo real
                event(new OfertaActualizada($oferta));
            }
        }
        Log::info('RevisarFechasOfertas Job completed.');
    }
}
