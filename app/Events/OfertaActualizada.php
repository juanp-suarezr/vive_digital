<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class OfertaActualizada
{
    public $oferta;

    public function __construct($oferta)
    {
        $this->oferta = $oferta;
    }

    public function broadcastOn()
    {
        return new Channel('ofertas');
    }

    public function broadcastWith()
    {
        return [
            'oferta_id' => $this->oferta->id,
            'nombre_oferta' => $this->oferta->nombre,
        ];
    }
}
