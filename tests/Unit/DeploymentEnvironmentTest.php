<?php

use App\Support\DeploymentEnvironment;
use Dotenv\Dotenv;
use Illuminate\Encryption\Encrypter;
use Illuminate\Filesystem\Filesystem;

beforeEach(function () {
    $this->deploymentPath = sys_get_temp_dir().'/portfolio-deployment-'.bin2hex(random_bytes(8));
    mkdir($this->deploymentPath, 0700);
    copy(dirname(__DIR__, 2).'/.env.hostinger.example', $this->deploymentPath.'/.env.hostinger.example');
});

afterEach(function () {
    (new Filesystem)->deleteDirectory($this->deploymentPath);
});

test('fresh deployment generates a private production environment and stable key', function () {
    DeploymentEnvironment::prepare($this->deploymentPath);
    $contents = file_get_contents($this->deploymentPath.'/.env');
    $values = Dotenv::parse($contents);
    $key = base64_decode(substr($values['APP_KEY'], 7), true);
    expect($values['APP_ENV'])->toBe('production')
        ->and($values['APP_DEBUG'])->toBe('false')
        ->and($values['SESSION_DRIVER'])->toBe('file')
        ->and(Encrypter::supported($key, 'AES-256-CBC'))->toBeTrue()
        ->and(fileperms($this->deploymentPath.'/.env') & 0777)->toBe(0600);

    DeploymentEnvironment::prepare($this->deploymentPath);
    expect(file_get_contents($this->deploymentPath.'/.env'))->toBe($contents);
});

test('existing environment with a blank key keeps custom configuration', function () {
    file_put_contents($this->deploymentPath.'/.env', "APP_ENV=production\nAPP_URL=https://custom.example\nAPP_KEY=''\nSESSION_DRIVER=file\n");
    DeploymentEnvironment::prepare($this->deploymentPath);
    $values = Dotenv::parse(file_get_contents($this->deploymentPath.'/.env'));
    expect($values['APP_URL'])->toBe('https://custom.example')
        ->and($values['APP_KEY'])->toStartWith('base64:');
});

test('environment-provided key is used for a fresh deployment', function () {
    $key = 'base64:'.base64_encode(random_bytes(32));
    DeploymentEnvironment::prepare($this->deploymentPath, $key);
    $values = Dotenv::parse(file_get_contents($this->deploymentPath.'/.env'));
    expect($values['APP_KEY'])->toBe($key);
});

test('an existing application key is never rotated', function () {
    $key = 'base64:'.base64_encode(random_bytes(32));
    $contents = "APP_ENV=local\nAPP_KEY=\"$key\"\nCUSTOM_SETTING=keep-me\n";
    file_put_contents($this->deploymentPath.'/.env', $contents);
    DeploymentEnvironment::prepare($this->deploymentPath);
    expect(file_get_contents($this->deploymentPath.'/.env'))->toBe($contents);
});

test('malformed keys fail clearly without replacing the environment', function () {
    $contents = "APP_KEY=not-a-valid-key\n";
    file_put_contents($this->deploymentPath.'/.env', $contents);
    try {
        DeploymentEnvironment::prepare($this->deploymentPath);
        $this->fail('An invalid existing key must not be replaced.');
    } catch (RuntimeException $exception) {
        expect($exception->getMessage())->toContain('APP_KEY');
    }
    expect(file_get_contents($this->deploymentPath.'/.env'))->toBe($contents);
});

test('an empty inherited key cannot silently override the generated environment key', function () {
    expect(fn () => DeploymentEnvironment::prepare($this->deploymentPath, ''))
        ->toThrow(RuntimeException::class, 'APP_KEY is empty or invalid');
});
