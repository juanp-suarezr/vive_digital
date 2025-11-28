<?php

namespace App\Http\Controllers;

use App\Exports\RegisterExports;
use App\Exports\RegisterPoliticasExports;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Models\Info_usuario;
use App\Models\Puntos;
use App\Models\Registro;
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



class RegistroController extends Controller
{
    public function index()
    {



        if (auth()->check()) {

            $registro = [];
            $isValidation = false;



            if (RequestFacade::input('origin') == 'validation') {

                $isValidation = true;
                if (Auth::user()->roles[0]->name == 'Administrador' || Auth::user()->roles[0]->name == 'Supervisor') {
                    $registro =  Registro::query()
                        ->when(RequestFacade::input('search'), function ($query, $search) {
                            $query->where('nombres', 'like', '%' . $search . '%')
                                ->OrWhere('apellidos', 'like', '%' . $search . '%')
                                ->OrWhere('identificacion', 'like', '%' . $search . '%');
                        })
                        ->latest('created_at') // Ordena los resultados por la columna 'created_at' de forma descendente
                        ->first();
                } else {
                    $registro =  Registro::query()
                        ->when(RequestFacade::input('search'), function ($query, $search) {
                            $query->where('nombres', 'like', '%' . $search . '%')
                                ->OrWhere('apellidos', 'like', '%' . $search . '%')
                                ->OrWhere('identificacion', 'like', '%' . $search . '%');
                        })->whereHas('puntos_vive', function ($query) {
                            $query->where('id_user', Auth::id()); // Filtrar por el ID del usuario autenticado
                        })
                        ->latest('created_at') // Ordena los resultados por la columna 'created_at' de forma descendente
                        ->first();
                }
            } else {

                $isValidation = false;

                if (Auth::user()->roles[0]->name == 'Administrador' || Auth::user()->roles[0]->name == 'Supervisor') {
                    $registro =  Registro::query()
                        ->when(RequestFacade::input('search'), function ($query, $search) {
                            $query->where('nombres', 'like', '%' . $search . '%')
                                ->OrWhere('apellidos', 'like', '%' . $search . '%')
                                ->OrWhere('identificacion', 'like', '%' . $search . '%');
                        })->when(RequestFacade::input('fecha_init') || RequestFacade::input('fecha_end'), function ($query) {
                            $fecha_init = RequestFacade::input('fecha_init');
                            $fecha_end = RequestFacade::input('fecha_end');

                            if ($fecha_end == null) {
                                $fecha_end = date('Y-m-d');
                            }

                            $query->whereBetween('created_at', [$fecha_init, $fecha_end]);
                        })->when(RequestFacade::input('punto'), function ($query, $punto) {
                            $query->whereHas('puntos_vive', function ($query) use ($punto) {
                                $query->where('id', $punto);
                            });
                        })
                        ->latest('created_at') // Ordena los resultados por la columna 'created_at' de forma descendente
                        ->paginate(5)
                        ->withQueryString();
                } else {

                    $registro = Registro::query()

                        ->when(RequestFacade::input('search'), function ($query, $search) {
                            $query->where('nombres', 'like', '%' . $search . '%')
                                ->OrWhere('apellidos', 'like', '%' . $search . '%')
                                ->OrWhere('identificacion', 'like', '%' . $search . '%');
                        })->when(RequestFacade::input('fecha_init') || RequestFacade::input('fecha_end'), function ($query) {
                            $fecha_init = RequestFacade::input('fecha_init');
                            $fecha_end = RequestFacade::input('fecha_end');

                            if ($fecha_end == null) {

                                $fecha_end = date('d-m-Y');
                            }

                            $query->whereBetween('created_at', [$fecha_init, $fecha_end]);
                        })->whereHas('puntos_vive', function ($query) {
                            $query->where('id_user', Auth::id()); // Filtrar por el ID del usuario autenticado
                        })
                        ->latest('created_at')
                        ->paginate(5)
                        ->withQueryString();
                }
            }



            return Inertia::render(

                'Registrados/Index',

                [
                    'registro' => $registro,
                    'filters' => RequestFacade::only(['search', 'fecha_init', 'fecha_end', 'punto']),
                    'validation' => $isValidation,
                    'puntos' => Puntos::all(),
                ]
            );
        } else {
            return redirect()->route('login', ['origin' => 'validation', 'identificacion' => RequestFacade::input('search')]);
        }
    }

    public function searchRegistrado()
    {

        return [
            'registrados' => Info_usuario::query()
                ->when(RequestFacade::input('identificacion'), function ($query, $search) {
                    $query->where('identificacion', $search);
                })->get()->first(),
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // Verificar si el usuario ya tiene un registro hoy
        $existingTodayRecord = Registro::where('identificacion', $request->identificacion)
            ->whereDate('created_at', Carbon::today())
            ->first();

        if ($existingTodayRecord) {
            return redirect()->back()->with('error', 'Ya has realizado un registro el día de hoy. Por favor, vuelve mañana.');
        }

        // Validación de los datos del request
        $request->validate([
            'nombres' => 'required|string|max:100',
            'apellidos' => 'required|string|max:100',
            'edad' => 'required',
            'tipo_documento' => 'required',
            'identificacion' => 'required|max:20',
            'direccion' => 'required|string|max:100',
            'sector' => 'required',
            'comuna' => 'required',
            'telefono' => 'required|max:15',
            'email' => 'required|string|lowercase|email|max:100',
            'genero' => 'required',
            'condicion' => 'required',
            'etnia' => 'required',
            'nivel_estudio' => 'required',
            'codePunto' => 'required',
            'tipo_servicio' => 'required',
            'dignatario' => 'required',
        ]);

        // Obtener el punto correspondiente
        $puntos = Puntos::where('code', $request->codePunto)->get();

        DB::transaction(function () use ($request, $puntos) {

            $nombres = strtolower($request->nombres);
            $apellidos = strtolower($request->apellidos);

            // Crear el registro en la tabla 'registro'
            $user = Registro::create([
                'nombres' => $nombres,
                'apellidos' => $apellidos,
                'edad' => $request->edad,
                'tipo_documento' => $request->tipo_documento,
                'identificacion' => $request->identificacion,
                'direccion' => $request->direccion,
                'sector' => $request->sector,
                'comuna' => $request->input('comuna.label'),
                'telefono' => $request->telefono,
                'email' => $request->email,
                'genero' => $request->genero,
                'condicion' => $request->condicion,
                'etnia' => $request->etnia,
                'nivel_estudio' => $request->nivel_estudio,
                'id_puntos' => $puntos[0]->id,
                'tipo_servicio' => $request->tipo_servicio,
                'dignatario' => $request->dignatario,
            ]);

            // Verificar si ya existe un registro con la misma identificación en la tabla 'info_usuario'
            $existingUser = Info_usuario::where('identificacion', $request->identificacion)->first();

            if (!$existingUser) {
                // Crear el registro en la tabla 'info_usuario' solo si no existe
                Info_usuario::create([
                    'nombres' => $nombres,
                    'apellidos' => $apellidos,
                    'edad' => $user->edad,
                    'tipo_documento' => $user->tipo_documento,
                    'identificacion' => $user->identificacion,
                    'direccion' => $user->direccion,
                    'sector' => $user->sector,
                    'comuna' => $user->comuna,
                    'telefono' => $user->telefono,
                    'email' => $user->email,
                    'genero' => $user->genero,
                    'condicion' => $user->condicion,
                    'etnia' => $user->etnia,
                    'nivel_estudio' => $user->nivel_estudio,
                    'dignatario' => $user->dignatario,
                ]);
            } else {
                // Actualizar el registro existente con la nueva información
                $existingUser->update([
                    'nombres' => $nombres,
                    'apellidos' => $apellidos,
                    'edad' => $user->edad,
                    'tipo_documento' => $user->tipo_documento,
                    'direccion' => $user->direccion,
                    'sector' => $user->sector,
                    'comuna' => $user->comuna,
                    'telefono' => $user->telefono,
                    'email' => $user->email,
                    'genero' => $user->genero,
                    'condicion' => $user->condicion,
                    'etnia' => $user->etnia,
                    'nivel_estudio' => $user->nivel_estudio,
                    'dignatario' => $user->dignatario,
                ]);
            }
            Log::info('registro', ['registro' => $user]);
            // event(new Registered($user));
        });



        return redirect()->route('register');
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
            'comuna' => '',
            'telefono' => 'required|max:15',
            'email' => 'required|string|lowercase|email|max:100',
            'genero' => 'required',
            'condicion' => 'required',
            'etnia' => 'required',
            'nivel_estudio' => 'required',
            'tipo_servicio' => 'required',
            'dignatario' => 'required',
        ]);

        // Convertir nombres y apellidos a mayúsculas antes de actualizar
        $data['nombres'] = mb_strtoupper($data['nombres']);
        $data['apellidos'] = mb_strtoupper($data['apellidos']);
        $data['comuna'] = $request->input('comuna.label'); // Asegurarse de que 'comuna' sea un string
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

    public function excel_politicas()
    {
        ob_end_clean();
        ob_start();

        $startDate = RequestFacade::input('fecha_init');
        $endDate = RequestFacade::input('fecha_end');

        return Excel::download(new RegisterPoliticasExports($startDate, $endDate), 'register.xls', \Maatwebsite\Excel\Excel::XLS);
    }
}
