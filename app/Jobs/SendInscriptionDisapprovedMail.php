<?php

namespace App\Jobs;

use App\Mail\InscriptionDisapprovedMail;
use App\Models\Inscripciones;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendInscriptionDisapprovedMail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $inscription;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Inscripciones $inscription)
    {
        $this->inscription = $inscription;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        Mail::to($this->inscription->info_user->email)->send(new InscriptionDisapprovedMail($this->inscription));
    }
}
