<?php
namespace App\Listeners;

use Illuminate\Mail\Events\MessageSendingFailed as MessageFailed;
use Illuminate\Support\Facades\Log;

class LogFailedMessage
{
    /**
     * Handle the event.
     */
    public function handle(MessageFailed $event): void
    {
        // Lógica para manejar el evento MessageFailed
        Log::error('Error al enviar el correo.', [
            'to' => $event->message->getTo(),
            'error' => $event->exception->getMessage(),
        ]);
    }
}
