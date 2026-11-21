<?php

use Inertia\Testing\AssertableInertia as Assert;

test('portfolio renders without a database connection', function () {
    $originalConnection = config('database.default');
    config(['database.default' => 'unavailable', 'session.driver' => 'file', 'cache.default' => 'file']);

    try {
        $this->get('/')->assertOk()->assertInertia(fn (Assert $page) => $page->component('portfolio'));
    } finally {
        config(['database.default' => $originalConnection]);
    }
});

test('every configured case study renders with its slug', function (string $slug) {
    $this->get('/projects/'.$slug)->assertOk()->assertInertia(fn (Assert $page) => $page
        ->component('case-study')
        ->where('slug', $slug));
})->with((require __DIR__.'/../../config/portfolio.php')['project_slugs']);

test('unknown routes and case studies return the custom 404', function (string $path) {
    $this->get($path)->assertNotFound()->assertInertia(fn (Assert $page) => $page->component('not-found'));
})->with(['/not-a-page', '/projects/not-a-project']);

test('sitemap contains configured project routes', function () {
    $response = $this->get('/sitemap.xml')->assertOk()->assertHeader('Content-Type', 'application/xml');

    foreach (config('portfolio.project_slugs') as $slug) {
        $response->assertSee(url('/projects/'.$slug), false);
    }
});
