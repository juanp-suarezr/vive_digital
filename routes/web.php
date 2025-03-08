<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CapacitacionesController;
use App\Http\Controllers\CargueMasivoController;
use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\EventosController;
use App\Http\Controllers\OfertasController;
use App\Http\Controllers\PerfilController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PuntosController;
use App\Http\Controllers\RegistroController;
use App\Http\Controllers\RoleController;
use App\Models\Inscripciones;
use App\Models\Ofertas;
use App\Models\PageView;
use App\Models\Perfil;
use App\Models\Puntos;
use App\Models\Registro;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//inicio pagina web
Route::get('/Welcome', function () {

    return Inertia::render('Welcome', [

        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,


    ]);
})->name('Welcome');

//ruta puntos
Route::resource('puntos', PuntosController::class);

Route::get('/', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    } else {
        return Inertia::render('Welcome', [

            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,




        ]);
    }
});

//ruta capacitaciones
Route::resource('capacitaciones', CapacitacionesController::class);


Route::get('/home', function () {
    if (auth()->check()) {
        return redirect()->route('dashboard');
    } else {
        return Inertia::render('Welcome', [

            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,


        ]);
    }
});


Route::post('registro', [RegistroController::class, 'create'])->name('registro');
Route::get('/registrados', [RegistroController::class, 'index'])->name('registrados.index');
Route::get('/searchRegistrado', [RegistroController::class, 'searchRegistrado'])->name('searchRegistrado');
Route::get('register', [RegisteredUserController::class, 'create'])
    ->name('register');



Route::get('/dashboard', function () {
    $puntosID = [];
    $registrados = [];
    $certificados = 0;
    $ofertas = [];
    $puntos = Puntos::where('id_user', Auth::id())->first();
    $pageView = PageView::all();

    if ($puntos) {
        $puntosID = $puntos->id;
        $registrados = Registro::whereHas('puntos_vive', function ($query) {
            $query->where('id_user', Auth::id()); // Filtrar por el ID del usuario autenticado
        })->count();
        $ofertas = Ofertas::where('id_puntos', $puntosID)->count();
        $certificados = Inscripciones::where('estadoProceso', 'Certificado')
            ->whereHas('oferta', function ($query) use ($puntosID) {
                $query->where('id_puntos', $puntosID); // Verifica si el id_punto de la oferta coincide
            })
            ->count();
    } else {
        $puntos = Puntos::count();
        $registrados = Registro::count();
        $ofertas = Ofertas::count();
        $certificados = Inscripciones::where('estadoProceso', 'Certificado')->count();
    }
    return Inertia::render('Dashboard', [
        'registrados' =>  $registrados,
        'ofertas' => $ofertas,
        'puntos' => $puntos,
        'certificados' => $certificados,
        'views' => $pageView,

    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/about', fn() => Inertia::render('About'))->name('about');
    // Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //ACTUALIZAR OFERTAS
    Route::get('/oferts', [OfertasController::class, 'ofertas'])->name('oferts.ofertas');
    Route::get('/inscritos', [OfertasController::class, 'inscritos'])->name('oferts.inscritos');
    Route::get('/totalInscritos', [OfertasController::class, 'totalInscritos'])->name('totalInscritos');
    Route::post('/ActualizarOfertas', [OfertasController::class, 'actuOferts'])->name('ofertas.actuOferts');
    //certificar
    Route::post('/certificar', [OfertasController::class, 'certificar'])->name('oferts.certificar');
    //cancelar certificar
    Route::post('/cancelar-certificado', [OfertasController::class, 'noCertificar'])->name('oferts.noCertificar');

    //GESTIÓN DE INSCRIPCIONES
    Route::get('/gestion-inscritos', [CapacitacionesController::class, 'aprobarInscritos'])->name('gestionInscritos');
    Route::post('/gestion-inscritos', [CapacitacionesController::class, 'aprobarPreInscripciones'])->name('inscripciones.aprobar');
    Route::post('/gestion-inscritos-rechazar', [CapacitacionesController::class, 'rechazarInscripciones'])->name('inscripciones.rechazar');
    //Añadir comentario
    Route::put('/inscripciones/updateComment/{id}', [CapacitacionesController::class, 'addComentario'])->name('inscripciones.updateComment');

    //ACTUALIZAR Eventos
    Route::post('/ActualizarEventos', [EventosController::class, 'actuEvents'])->name('eventos.actuEvents');

    Route::get('/registrado', [RegistroController::class, 'edit'])->name('registrados.edit');
    Route::patch('/registrado', [RegistroController::class, 'update'])->name('registrados.update');
    //EXCEL
    Route::get('/registrado/exportar', [RegistroController::class, 'excel'])->name('registrados.excel');
    Route::get('/ofertas/exportar', [OfertasController::class, 'excel'])->name('oferts.excel');
    Route::get('/totalInscritos/exportar', [OfertasController::class, 'excelInscritos'])->name('totalInscritos.excel');

    //INSCRITOS MASIVOS
    Route::get('/inscritosMasivos', [OfertasController::class, 'inscritosMasivos'])->name('inscritosMasivos.index');
    //PLANTILLA EXCEL para cargue masivo
    //ofertas
    Route::get('plantillaOF', [CargueMasivoController::class, 'plantillaOF'])->name('plantillaOF.excel');
    //inscritos
    Route::get('plantillaIns', [CargueMasivoController::class, 'plantillaIns'])->name('plantillaIns.excel');

    //import excel carga masiva
    //ofertas
    Route::post('/cargueOfertas', [CargueMasivoController::class, 'cargueOfertas'])->name('cargueOfertas');
    //inscritos
    Route::post('/cargueInscritos', [CargueMasivoController::class, 'cargueInscritos'])->name('cargueInscritos');
});

Route::group(['middleware' => ['auth']], function () {
    Route::resource('users', UserController::class);
    Route::resource('roles', RoleController::class);
    Route::resource('perfil', PerfilController::class);
    Route::resource('ofertas', OfertasController::class);
    Route::resource('eventos', EventosController::class);
});



require __DIR__ . '/auth.php';
