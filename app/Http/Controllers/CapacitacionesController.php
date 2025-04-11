<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\Controller;
use App\Mail\InscriptionApprovedMail;
use App\Models\Info_usuario;
use App\Models\Inscripciones;
use App\Models\Ofertas;
use App\Models\Perfil;
use App\Models\Puntos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Jobs\SendInscriptionApprovedMail;
use App\Jobs\SendInscriptionDisapprovedMail;
use Illuminate\Support\Facades\DB;

class CapacitacionesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // function __construct()
    // {
    //     $this->middleware('permission:usuarios-listar|usuarios-crear|usuarios-editar|usuarios-eliminar', ['only' => ['index', 'store']]);
    //     $this->middleware('permission:usuarios-crear', ['only' => ['create', 'store']]);
    //     $this->middleware('permission:usuarios-editar', ['only' => ['edit', 'update']]);
    //     $this->middleware('permission:usuarios-eliminar', ['only' => ['destroy']]);
    // }
    public function index()
    {

        $puntos = Puntos::all();

        return Inertia::render(

            'Capacitaciones',

            [
                'puntos' => $puntos,
                'ofertas_lucy' => $this->getOfertas(1),
                'ofertas_fernando' => $this->getOfertas(2),
                'ofertas_bella' => $this->getOfertas(3),
                'ofertas_consota' => $this->getOfertas(4),
                'ofertas_remanso' => $this->getOfertas(5),
                'info_usuario' => Info_usuario::query()
                    ->when(RequestFacade::input('identificacion'), function ($query, $identificacion) {
                        $query->where('identificacion', $identificacion);
                    })
                    ->get(),
            ]
        );
    }
    //obtener ofertas segun id punto
    public function getOfertas($num)
    {
        return Ofertas::query()
            ->when(RequestFacade::input('tipo'), function ($query, $search) {
                $query->where('tipo', $search);
            })
            ->when(RequestFacade::input('search'), function ($query, $search) {
                $query->where('nombre', 'LIKE', "%{$search}%");
            })->Where('id_puntos', $num)
            ->Where('estado', 'Activo')->with(['inscripciones' => function ($query) {
                $query->where('estadoProceso', 'Inscrito'); // Filtrar inscripciones con certificado en 0
            }])
            ->orderBy('created_at', 'desc') // Ordenar por la columna 'created_at' de forma descendente
            ->get();
    }

    //vista de formulario de inscripcion
    public function inscripcionCapacitacion(Request $request)
    {
        // Si la petición es POST, guardamos los datos en la sesión
        if ($request->isMethod('post')) {
            session(['info' => $request->all()]);

            return redirect()->route('inscribir-capacitaciones'); // Redirige a GET
        }


        // Si es GET, recuperamos los datos de la sesión
        $info = session('info', []);


        return Inertia::render('Capacitaciones/Inscribir', [
            'info' => $info,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createInfoInscripcion(Request $request)
    {
        // Validación de los datos del request
        $request->validate([
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
            'id_oferta' => 'required',

        ]);

        DB::transaction(function () use ($request) {



            // Verificar si ya existe un registro con la misma identificación en la tabla 'info_usuario'
            $existingUser = Info_usuario::where('identificacion', $request->identificacion)->first();

            if (!$existingUser) {
                // Crear el registro en la tabla 'info_usuario' solo si no existe
                Info_usuario::create([
                    'nombres' => $request->nombres,
                    'apellidos' => $request->apellidos,
                    'edad' => $request->edad,
                    'tipo_documento' => $request->tipo_documento,
                    'identificacion' => $request->identificacion,
                    'direccion' => $request->direccion,
                    'sector' => $request->sector,
                    'telefono' => $request->telefono,
                    'email' => $request->email,
                    'genero' => $request->genero,
                    'condicion' => $request->condicion,
                    'etnia' => $request->etnia,
                    'nivel_estudio' => $request->nivel_estudio,
                ]);
            } else {
                // Actualizar el registro existente con la nueva información
                $existingUser->update([
                    'nombres' => $request->nombres,
                    'apellidos' => $request->apellidos,
                    'edad' => $request->edad,
                    'tipo_documento' => $request->tipo_documento,
                    'direccion' => $request->direccion,
                    'sector' => $request->sector,
                    'telefono' => $request->telefono,
                    'email' => $request->email,
                    'genero' => $request->genero,
                    'condicion' => $request->condicion,
                    'etnia' => $request->etnia,
                    'nivel_estudio' => $request->nivel_estudio,
                ]);
            }

            $oferta = Ofertas::find($request->id_oferta);

            // Verificar si la oferta existe
            if (!$oferta) {
                return redirect()->back()->withErrors(['error' => 'La oferta no existe.']);
            }

            // Verificar si la oferta no esta activa
            if ($oferta->estado != 'Activo') {
                return redirect()->back()->withErrors(['error' => 'Esta oferta ya está bloqueada y no permite más inscripciones.']);
            }



            $registrados = Info_usuario::where('identificacion', $request->identificacion)->get()->first();

            $inscripcion = Inscripciones::where('estadoProceso', '!=', 'Rechazado')
                ->where('id_oferta', $request->id_oferta)
                ->where('id_info_user', $registrados->id)->get()->first();

            if ($inscripcion) {
                return redirect()->back()->withErrors(['error' => 'Usted ya tiene una inscripción registrada en esta oferta. Por favor revisar o estar pendiente del correo electrónico.']);
            }

            try {
                Inscripciones::create([
                    'id_oferta' => $request->id_oferta,
                    'id_info_user' => $registrados->id,
                    'identificacion' => $request->identificacion,
                ]);
            } catch (\Illuminate\Database\QueryException $e) {
                // Manejar el error de clave única
                return redirect()->back()->withErrors(['error' => 'El usuario ya está inscrito en esta oferta.']);
            }
        });

        return redirect()->back();
    }


    public function aprobarInscritos(Request $request)
    {
        // Obtener los filtros de la solicitud
        $filters = $request->only(['search_user', 'search_oferta', 'punto', 'estado']);

        // Obtener el usuario autenticado
        $user = Auth::user();
        $puntoID = Puntos::select('id')->where('id_user', $user->id)->first();

        // Consulta base con relaciones
        $inscripciones = Inscripciones::with(['oferta.puntos_vive', 'info_user'])
            ->when($filters['search_user'] ?? null, function ($query, $search_user) {
                // Filtrar por nombre o correo en la relación info_user
                $query->whereHas('info_user', function ($q) use ($search_user) {
                    $q->where('nombres', 'like', "%$search_user%")
                        ->orWhere('apellidos', 'like', "%$search_user%")
                        ->orWhere('email', 'like', "%$search_user%");
                });
            })
            ->when($filters['search_oferta'] ?? null, function ($query, $search_oferta) {
                // Filtrar por nombre de la oferta
                $query->whereHas('oferta', function ($q) use ($search_oferta) {
                    $q->where('nombre', 'like', "%$search_oferta%");
                });
            })
            ->when($filters['punto'] ?? null, function ($query, $punto) use ($user, $puntoID) {
                // Filtrar por puntos: Si es admin o supervisor, puede elegir, si no, solo su punto
                if ($user->roles->contains('name', 'Administrador') || $user->roles->contains('name', 'Supervisor')) {
                    $query->whereHas('oferta', function ($q) use ($punto) {
                        $q->where('id_puntos', $punto);
                    });
                } else {
                    $query->whereHas('oferta', function ($q) use ($puntoID) {
                        $q->where('id_puntos', $puntoID); // Punto del usuario
                    });
                }
            })
            ->when($filters['estado'] ?? null, function ($query, $estado) {
                // Filtrar por estadoProceso
                $query->where('estadoProceso', $estado);
            })
            ->where(function ($query) {
                $query->where('estadoProceso', 'En proceso')
                    ->orWhere('estadoProceso', 'Rechazado');
            })
            ->orderByRaw("FIELD(estadoProceso, 'En proceso') DESC")
            ->orderBy('created_at', 'asc') // Ordenar por la columna 'created_at' de forma ascendente
            ->paginate(10) // Paginación de 10 resultados
            ->withQueryString(); // Mantener parámetros en la URL

        // Retornar vista Inertia con datos
        return Inertia::render('Inscripciones/GestionUsuarios', [
            'inscripciones' => $inscripciones,
            'filters' => $filters,
            'puntos' => Puntos::all(),
        ]);
    }

    //añadir comentarios
    public function addComentario($id, Request $request)
    {

        $comentario = $request->input('comentario');


        $inscripcion = Inscripciones::find($id);

        $inscripcion->comentario = $comentario ?? 'NA';
        $inscripcion->save();

        return back();
    }

    // Asegúrate de tener el siguiente método en tu controlador de inscripciones
    public function aprobarPreInscripciones(Request $request)
    {
        $ids = $request->input('ids');

        // Obtener las inscripciones que coinciden con los IDs y el id_oferta
        $inscriptions = Inscripciones::whereIn('id', $ids)
            ->select('id', 'estadoProceso') // Seleccionar solo las columnas necesarias
            ->with('info_user')
            ->with('oferta')
            ->get();

        foreach ($inscriptions as $inscription) {
            // Actualizar el estado de la inscripción
            $inscription->estadoProceso = 'Inscrito';
            $success = $inscription->save();

            // Verificar que el estado se haya actualizado correctamente
            if ($success) {
                // Enviar el correo electrónico utilizando colas
                SendInscriptionApprovedMail::dispatch($inscription);
            } else {
                // Manejar el error si la inscripción no se pudo actualizar
                // Puedes agregar un mensaje de error o realizar alguna otra acción
                return back()->withErrors(['msg' => 'Ocurrió un error al actualizar la inscripción.']);
            }
        }

        return back();
    }


    public function rechazarInscripciones(Request $request)
    {
        $ids = $request->input('ids');

        // Obtener las inscripciones que coinciden con los IDs y el id_oferta
        $inscriptions = Inscripciones::whereIn('id', $ids)
            ->select('id', 'estadoProceso') // Seleccionar solo las columnas necesarias
            ->with('info_user')
            ->with('oferta')
            ->get();

        foreach ($inscriptions as $inscription) {
            // Actualizar el estado de la inscripción
            $inscription->estadoProceso = 'Rechazado';
            $success = $inscription->save();

            // Verificar que el estado se haya actualizado correctamente
            if ($success) {
                // Enviar el correo electrónico utilizando colas
                SendInscriptionDisapprovedMail::dispatch($inscription);
            } else {
                // Manejar el error si la inscripción no se pudo actualizar
                // Puedes agregar un mensaje de error o realizar alguna otra acción
                return back()->withErrors(['msg' => 'Ocurrió un error al actualizar la inscripción.']);
            }
        }

        return back();
    }
}
