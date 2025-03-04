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
            })->when(RequestFacade::input('fecha_init') || RequestFacade::input('fecha_fin'), function ($query) {
                $fecha_init = RequestFacade::input('fecha_init');
                $fecha_end = RequestFacade::input('fecha_end');

                if ($fecha_end == null) {
                    $fecha_end = date('Y-m-d');
                }

                $query->whereBetween('created_at', [$fecha_init, $fecha_end]);
            })->Where('id_puntos', $num)
            ->Where('estado', 1)->with(['inscripciones' => function ($query) {
                $query->where('estadoProceso', 'Inscrito'); // Filtrar inscripciones con certificado en 0
            }])
            ->orderBy('created_at', 'desc') // Ordenar por la columna 'created_at' de forma descendente
            ->get();
    }



    public function aprobarInscritos(Request $request)
    {
        // Obtener los filtros de la solicitud
        $filters = $request->only(['search_user', 'search_oferta', 'punto', 'estado']);

        // Obtener el usuario autenticado
        $user = Auth::user();

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
            ->when($filters['punto'] ?? null, function ($query, $punto) use ($user) {
                // Filtrar por puntos: Si es admin o supervisor, puede elegir, si no, solo su punto
                if ($user->roles->contains('name', 'Administrador') || $user->roles->contains('name', 'Supervisor')) {
                    $query->whereHas('oferta', function ($q) use ($punto) {
                        $q->where('id_puntos', $punto);
                    });
                } else {
                    $query->whereHas('oferta', function ($q) use ($user) {
                        $q->where('id_puntos', $user->punto); // Punto del usuario
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
