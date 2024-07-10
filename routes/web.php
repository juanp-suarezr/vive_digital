<?php

use Illuminate\Support\Facades\Request as RequestFacade;
use App\Http\Controllers\EventosController;
use App\Http\Controllers\OfertasController;
use App\Http\Controllers\PerfilController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PuntosController;
use App\Http\Controllers\RegistroController;
use App\Http\Controllers\RoleController;
use App\Models\Perfil;
use Illuminate\Foundation\Application;
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



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/about', fn () => Inertia::render('About'))->name('about');
    Route::get('users', [UserController::class, 'index'])->name('users.index');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //ACTUALIZAR OFERTAS
    Route::post('/ActualizarOfertas', [OfertasController::class, 'actuOferts'])->name('ofertas.actuOferts');
    //ACTUALIZAR Eventos
    Route::post('/ActualizarEventos', [EventosController::class, 'actuEvents'])->name('eventos.actuEvents');

    Route::get('/registrado', [RegistroController::class, 'edit'])->name('registrados.edit');
    Route::patch('/registrado', [RegistroController::class, 'update'])->name('registrados.update');
    //EXCEL
    Route::get('/registrado/exportar', [RegistroController::class, 'excel'])->name('registrados.excel');
});

Route::group(['middleware' => ['auth']], function () {
    Route::resource('users', UserController::class)->middleware('auth');
    Route::resource('roles', RoleController::class);
    Route::resource('perfil', PerfilController::class);
    Route::resource('ofertas', OfertasController::class);
    Route::resource('eventos', EventosController::class);
});



require __DIR__ . '/auth.php';
