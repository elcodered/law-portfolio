<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('portfolio');
    }

    public function project(string $slug): Response
    {
        abort_unless(in_array($slug, config('portfolio.project_slugs'), true), 404);

        return Inertia::render('case-study', ['slug' => $slug]);
    }
}
