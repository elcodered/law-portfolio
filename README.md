# John Lawrence Cambalon — Portfolio

A Laravel 13 + Inertia 3 + React 19 + TypeScript portfolio. The public pages use typed local content; no database, external API, or contact service is required. Dark mode is the first-visit default, with a persistent light-mode toggle. Motion respects the visitor’s reduced-motion setting.

## Local development with Laravel Herd

Requirements: PHP 8.3 or later (local implementation verified with PHP 8.5.13), Composer, Node 22+, npm. Existing lockfiles define the dependency versions.

```sh
composer install
npm ci
cp .env.example .env
php artisan key:generate
npm run dev
```

Skip the copy/key commands if your `.env` is already configured. Herd serves this directory at `http://john-lawrence-portfolio-website.test`; use Herd’s assigned domain if yours differs. Set `APP_URL` accordingly. Without Herd, run `php artisan serve` in a second terminal and open its printed URL. Vite serves assets, not the Laravel page.

Public-only defaults: `SESSION_DRIVER=file`, `CACHE_STORE=file`, `QUEUE_CONNECTION=sync`. SQLite migrations are needed only if using the starter kit’s optional authentication/settings pages:

```sh
touch database/database.sqlite
php artisan migrate
```

The supplied starter auth/dashboard remains available but is separate from the public portfolio. Disable public registration in `config/fortify.php` if you do not need accounts on deployment.

## Content and routes

- `/` — complete portfolio: introduction, highlights, featured work, searchable/filterable index, experience, contributions, skills, approach, education, music, contact.
- `/projects/{slug}` — case studies for all 19 configured projects.
- `/sitemap.xml` and `/robots.txt` — search discovery.
- Unknown paths and unknown project slugs — custom 404, with HTTP status 404.

Edit `resources/js/data/portfolio.ts` for profile, projects, skills, experience, and factual highlights. Project types are defined in `resources/js/types/portfolio.ts`. Reusable layout and visual components live in `resources/js/components/portfolio/`. Portfolio styles follow the shared starter tokens in `resources/css/app.css`.

Set the empty `profile.email`, `github`, and `linkedin` values only to verified contact details/URLs. Empty social links and resume controls stay hidden. Until an email is configured, contact shows an honest informational message. No form or message is silently submitted. For a resume, add the actual PDF under `public/`, then set `profile.resume` to its public path.

`statusConfirmed: false` means the stored status is provisional: listings say “Verification pending” and the case study explicitly explains the uncertainty. `stagesConfirmed` distinguishes supplied workflows from general illustrative stages. `public: false` hides a project in the client; also remove its slug from `config/portfolio.php` to remove its public route and sitemap entry. When adding a project, add its slug to that file as well. Do not use public visibility flags for confidential data; public JS bundles can be inspected.

Before public deployment, review roles, statuses, dates, and capabilities against your records. DOST entries describe contributed work; no sole authorship or completed launch is implied. The brief lists eight DOST project names despite referring to seven systems: no seven-system metric is published until that discrepancy is resolved. The 158,782 figure is source volume, not processed output.

## Screenshots and visuals

The hero and project visuals are lightweight HTML/SVG illustrations, deliberately labeled as concepts. Synthetic map data never fetches real locations. The GIS case study includes an accessible comparison slider.

Place approved screenshots under `public/images/projects/<slug>/`, then replace or extend `ProjectVisual` and the case-study gallery with those images. Supply descriptive alt text, explicit dimensions, WebP/AVIF where possible, and lazy loading below the fold. The current screenshot area honestly indicates that verified media is pending. Do not relabel the generated interface concepts as actual screenshots.

## Checks and production build

```sh
npm run check
npm run types:check
vendor/bin/pint --test
php artisan test
npm run build
```

`npm run check:fix` formats and applies lint fixes. `npm run build` produces Laravel’s `public/build/` assets. Vite’s font plugin downloads Space Grotesk and Inter at build time and serves them locally afterward; initial builds require access to the font provider. System fonts remain fallbacks.

Blade provides a canonical URL, description, Open Graph metadata, and Person structured data. React supplies per-page metadata. For full server-rendered page content, build with `npm run build:ssr` and run Inertia SSR on a VPS; HTML-only shared hosting uses client rendering. No Lighthouse or Core Web Vitals score is claimed.

## Hostinger shared hosting

1. Select a plan with SSH/Composer and PHP 8.3+ and verify support for this lockfile’s PHP/platform requirements. Run `composer check-platform-reqs` on the host. Some plans cannot run long-lived Node/SSR processes.
2. Build locally with `npm ci && npm run build`. Upload the application and `public/build/`; exclude `.env`, `node_modules`, local databases, and `public/hot`. Install server dependencies with `composer install --no-dev --optimize-autoloader`.
3. Point the domain document root to the application’s **public/** directory. Never expose the repository root. Keep `.env`, `vendor/`, `storage/`, and application code outside the public web root. If the panel fixes the root to `public_html`, keep the Laravel application above it and make `public_html` the equivalent of `public/`; adjust `index.php` bootstrap paths for that actual layout. Prefer a supported document-root change or symlink over relocating Laravel files manually.
4. Create the production `.env`: `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL=https://your-domain`, a freshly generated `APP_KEY`, `SESSION_DRIVER=file`, `CACHE_STORE=file`, `QUEUE_CONNECTION=sync`. Configure mail only if you later implement a real mail flow.
5. Give the web process write access to `storage/` and `bootstrap/cache/` without world-writable permissions. Enable HTTPS and secure session cookies. Run `php artisan optimize` after configuring the environment. No public-portfolio migration is required.
6. Verify homepage, each case study, unknown-route 404, sitemap, mobile navigation, and browser asset loading. Remove any stale `public/hot` file; it otherwise points production at a development server.

## Hostinger VPS

Use a supported Ubuntu/PHP setup with PHP-FPM, Nginx, Composer, and a Node version compatible with the lockfile. Install only the database/services you need. Configure Nginx `root /path/to/portfolio/public;` and `try_files $uri $uri/ /index.php?$query_string;`, PHP-FPM handling, HTTPS, and denial of dotfiles. Run the same production install/build/environment/permission steps above. Set the deployment owner and web group appropriately; never run the application as root.

A VPS can run the optional Inertia SSR process under systemd or a process manager. After `npm run build:ssr`, set `INERTIA_SSR_ENABLED=true` and use `php artisan inertia:start-ssr`; restart the managed SSR process with deployments. If you later add queue-backed jobs, configure a supervised queue worker. Neither SSR nor queue workers are required for this public client-rendered portfolio. Keep PHP-FPM and any supervised processes current with each release, retain backups, and test the live site after deployment.

## Awaiting owner-supplied details

Verified email/social URLs and resume; approved screenshots; exact contributions and lifecycle status for provisional projects; verified detailed descriptions for the DOST acronym entries. No fabricated testimonials, performance metrics, photos, or contact details are included.
