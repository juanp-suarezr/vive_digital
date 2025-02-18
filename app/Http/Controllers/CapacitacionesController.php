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

    public function create(Request $request)
    {

        return Inertia::render('Perfil/AddOferts', [
            'punto_id' => $request->id,
        ]);
    }

    public function store(Request $request)
    {

        $this->validate($request, [
            'nombre' => 'required|string',
            'tipo' => 'required|string',
            'horario' => 'required|string|max:100',
            'jornada' => 'required|string|max:100',
            'lugar' => 'string|max:100',
            'fecha_init' => 'required|string|max:255',
            'fecha_fin' => 'required|string|max:255',
            'cupo' => 'required',
        ]);

        $fileName = 'NA';

        if ($request->banner) {

            $request->validate([

                'banner' => 'mimes:jpg,png,jpeg,gif,bmp,tiff,svg,web,webp|max:2048',

            ]);


            $folder = 'ofertas';
            $extension = $request->file('banner')->getClientOriginalExtension();

            $fileName = time() . '_oferta_' . $request->nombre . '.' . $extension;
            $filePath = $request->file('banner')->storeAs('uploads/' . $folder, $fileName, 'public');
        }

        $ofertas = Ofertas::create([
            'id_puntos' => $request->input('id_puntos'),
            'nombre' => $request->input('nombre'),
            'tipo' => $request->input('tipo'),
            'horario' => $request->input('horario'),
            'jornada' => $request->input('jornada'),
            'lugar' => $request->input('lugar'),
            'fecha_init' => $request->input('fecha_init'),
            'fecha_fin' => $request->input('fecha_fin'),
            'cupo' => $request->input('cupo'),
            'banner' => $fileName,

        ]);

        return redirect()->route('perfil.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $oferta = Ofertas::find($id);

        return Inertia::render('Perfil/EditOferts', compact('oferta'));
    }

    public function actuOferts(Request $request)
    {

        $request->validate([
            'nombre' => 'required|string',
            'tipo' => 'required|string',
            'horario' => 'required|string|max:100',
            'jornada' => 'required|string|max:100',
            'lugar' => '',
            'fecha_init' => 'required|string|max:255',
            'fecha_fin' => 'required|string|max:255',
            'cupo' => 'required',
            'estado' => 'required',


        ]);

        $oferta = Ofertas::where('id', $request->id)->first();
        $oferta->nombre = $request->nombre;
        $oferta->tipo = $request->tipo;
        $oferta->horario = $request->horario;
        $oferta->jornada = $request->jornada;
        $oferta->lugar = $request->lugar;
        $oferta->fecha_init = $request->fecha_init;
        $oferta->fecha_fin = $request->fecha_fin;
        $oferta->cupo = $request->cupo;
        $oferta->estado = $request->estado;



        if ($request->banner != 'NA' && $request->banner != $oferta->banner) {

            $request->validate([

                'banner' => 'mimes:jpg,png,jpeg,gif,bmp,tiff,svg,web,webp|max:2048',

            ]);


            $folder = 'ofertas';
            $extension = $request->file('banner')->getClientOriginalExtension();

            $fileName = time() . '_oferta_' . $request->nombre . '.' . $extension;
            $filePath = $request->file('banner')->storeAs('uploads/' . $folder, $fileName, 'public');

            // Eliminar el archivo antiguo si existe
            if ($oferta->banner) {
                Storage::disk('public')->delete('uploads/' . $folder . '/' . $oferta->banner);
            }

            $oferta->banner = $fileName;
        }

        // Crear y persistir nuevo evento
        $oferta->save();


        return redirect()->route('perfil.index');
    }

    public function destroy(Request $request, $id)
    {

        $request->validate([
            'password' => ['required', 'current_password'],
        ]);
        Ofertas::where('id', $id)->delete();
        return redirect()->route('perfil.index')
            ->with('success', 'Recurso eliminado exitosamente');
    }

    public function aprobarInscritos(Request $request)
    {

        $filters = $request->only(['search', 'punto', 'estadoProceso']);
        // Usuario autenticado
        $user = Auth::user();

        // Consulta base con relaciones
        $inscripciones = Inscripciones::with(['oferta', 'info_user'])
            ->when($filters['search'] ?? null, function ($query, $search) {
                // Filtrar por nombre o correo en la relación infoUser
                $query->whereHas('info_user', function ($q) use ($search) {
                    $q->where('nombre', 'like', "%$search%")
                        ->orWhere('correo', 'like', "%$search%");
                });
            })
            ->when($filters['punto'] ?? null, function ($query, $punto) use ($user) {
                // Filtrar por puntos: Si es admin, puede elegir, si no, solo su punto
                if ($user->roles->contains('name', 'admin')) {
                    $query->whereHas('oferta', function ($q) use ($punto) {
                        $q->where('punto', $punto);
                    });
                } else {
                    $query->whereHas('oferta', function ($q) use ($user) {
                        $q->where('punto', $user->punto); // Punto del usuario
                    });
                }
            })->where('estadoProceso', 'En proceso')
            ->when($filters['estadoProceso'] ?? null, function ($query, $estado) {
                // Filtrar por estadoProceso
                $query->where('estadoProceso', $estado);
            })
            ->paginate(10) // Paginación de 10 resultados
            ->withQueryString(); // Mantener parámetros en la URL

        // Retornar vista Inertia con datos
        return Inertia::render('Inscripciones/GestionUsuarios', [
            'inscripciones' => $inscripciones,
            'filters' => $filters,
        ]);
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
}
