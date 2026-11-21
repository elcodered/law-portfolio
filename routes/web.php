<?php

use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::get('/projects/{slug}', [PortfolioController::class, 'project'])->name('projects.show');
Route::get('/sitemap.xml', function () {
    return response()->view('sitemap', ['slugs' => config('portfolio.project_slugs')])
        ->header('Content-Type', 'application/xml');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';

Route::fallback(fn () => Inertia\Inertia::render('not-found')->toResponse(request())->setStatusCode(404));
