<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'dark') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "dark" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: #f7f8fc;
            }

            html.dark {
                background-color: #0b0c11;
            }
        </style>

        <link rel="icon" href="/favicon.svg" type="image/svg+xml">

        <meta name="description" content="{{ config('portfolio.description') }}" data-inertia="description">
        <link rel="canonical" href="{{ request()->url() }}" data-inertia="canonical">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="{{ config('portfolio.name') }}">
        <meta property="og:title" content="{{ config('portfolio.name') }}" data-inertia="og:title">
        <meta property="og:description" content="{{ config('portfolio.description') }}" data-inertia="og:description">
        <meta property="og:url" content="{{ request()->url() }}" data-inertia="og:url">
        <meta name="theme-color" content="#0b0c11">
        <script type="application/ld+json">{!! json_encode([
            '@context' => 'https://schema.org',
            '@type' => 'Person',
            'name' => config('portfolio.name'),
            'url' => url('/'),
            'jobTitle' => 'Full-stack Developer and IT Professional',
            'address' => ['@type' => 'PostalAddress', 'addressLocality' => 'Butuan City', 'addressCountry' => 'PH'],
        ], JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_UNESCAPED_SLASHES) !!}</script>

        @fonts

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        <x-inertia::head>
            <title>{{ config('portfolio.name') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
