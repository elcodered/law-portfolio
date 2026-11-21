<?php

use App\Support\DeploymentEnvironment;

require dirname(__DIR__).'/vendor/autoload.php';

$externalKey = getenv('APP_KEY');

try {
    $message = DeploymentEnvironment::prepare(dirname(__DIR__), $externalKey === false ? null : $externalKey);
    fwrite(STDOUT, $message.PHP_EOL);
} catch (Throwable $exception) {
    fwrite(STDERR, 'Deployment environment setup failed: '.$exception->getMessage().PHP_EOL);
    exit(1);
}
