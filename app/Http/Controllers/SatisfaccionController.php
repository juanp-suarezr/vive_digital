<?php

namespace App\Http\Controllers;

use App\Exports\RegisterExports;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Info_usuario;
use App\Models\Puntos;
use App\Models\Registro;
use App\Models\Satisfaccion;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;
use Inertia\Response;



class SatisfaccionController extends Controller
{
    public function index() {}


    public function create(): Response
    {


        return Inertia::render(
            'FormularioSatisfaccion',
            [
                'puntos' => Puntos::all(),

            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validación de los datos del request
        $request->validate([
            'nombre' => 'required|string|max:100',
            'motivo_visita' => 'required|string|max:100',
            'identificacion' => 'required|max:20',
            'velocidad_internet' => 'required|string',
            'disponibilidad_equipos' => 'required|string',
            'funcionamiento_equipos' => 'required|string',
            'capacidad_administrador' => 'required|string',
            'amabilidad_administrador' => 'required|string',
            'publicidad_servicios' => 'required|string',
            'id_punto' => 'required',

        ]);


        DB::transaction(function () use ($request) {
            $nombre = strtolower($request->nombre);
            // Crear el registro en la tabla 'registro'
            Satisfaccion::create([
                'nombre' => $nombre,
                'motivo_visita' => $request->motivo_visita,
                'identificacion' => $request->identificacion,
                'velocidad_internet' => $request->velocidad_internet,
                'disponibilidad_equipos' => $request->disponibilidad_equipos,
                'funcionamiento_equipos' => $request->funcionamiento_equipos,
                'capacidad_administrador' => $request->capacidad_administrador,
                'amabilidad_administrador' => $request->amabilidad_administrador,
                'publicidad_servicios' => $request->publicidad_servicios,
                'id_punto' => $request->id_punto,

            ]);
        });



        return redirect()->route('Welcome');
    }



    public function edit(Request $request)
    {


        return Inertia::render(

            'Registrados/Edit',


            [
                'usuario' => Registro::findOrFail($request->id),
            ]
        );
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'nombres' => 'required|string|max:100',
            'apellidos' => 'required|string|max:100',
            'edad' => 'required',
            'tipo_documento' => 'required',
            'identificacion' => 'required|max:20',
            'direccion' => 'required|string|max:100',
            'sector' => 'required',
            'telefono' => 'required|max:15',
            'email' => 'required|string|lowercase|email|max:100',
            'genero' => 'required',
            'condicion' => 'required',
            'etnia' => 'required',
            'nivel_estudio' => 'required',
            'tipo_servicio' => 'required',
            'dignatario' => 'required',
        ]);

        // Actualizar el modelo de usuario con los datos validados

        // Verificar si ya existe un registro con la misma identificación en la tabla 'info_usuario'
        $existingUser = Info_usuario::where('identificacion', $request->identificacion)->first();
        if ($existingUser) {
            // Actualizar el registro existente con la nueva información
            $existingUser->fill($data)->save();
        }

        $user = Registro::findOrFail($request->id);
        $user->fill($data)->save();
        return redirect()->route('registrados.index');
    }

    public function excel()
    {
        ob_end_clean();
        ob_start();

        $startDate = RequestFacade::input('fecha_init');
        $endDate = RequestFacade::input('fecha_end');

        return Excel::download(new RegisterExports($startDate, $endDate), 'register.xls', \Maatwebsite\Excel\Excel::XLS);
    }
}
