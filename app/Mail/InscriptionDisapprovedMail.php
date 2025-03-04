<?php
namespace App\Mail;

use App\Models\Inscripciones;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class InscriptionDisapprovedMail extends Mailable
{
    use Queueable, SerializesModels;

    public $inscription;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Inscripciones $inscription)
    {
        $this->inscription = $inscription;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this
        ->subject('Estado de tu solicitud de inscripción curso '.$this->inscription->oferta->nombre)
        ->view('emails.inscription_disapproved')
                    ->with([
                        'name' => $this->inscription->info_user->nombres.' '.$this->inscription->info_user->apellidos,
                        'offer' => $this->inscription->oferta->nombre,
                        'reason' => $this->inscription->comentario,
                        ]);
    }
}
