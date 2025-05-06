<?php
namespace App\Listeners;

use Illuminate\Mail\Events\MessageSent;
use Illuminate\Support\Facades\Log;

class LogSentMessage
{
    /**
     * Handle the event.
     */
    public function handle(MessageSent $event): void
    {
        // Lógica para manejar el evento MessageSent
        Log::info('Correo enviado correctamente.', [
            'to' => $event->message->getTo(),
        ]);
    }
}
