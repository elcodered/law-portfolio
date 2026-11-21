<?php

namespace App\Support;

use Dotenv\Dotenv;
use Dotenv\Exception\InvalidFileException;
use Illuminate\Encryption\Encrypter;
use RuntimeException;

class DeploymentEnvironment
{
    /**
     * Prepare a fresh deployment without replacing an existing environment/key.
     * The only generated secret lives in the server's ignored .env file.
     */
    public static function prepare(string $basePath, ?string $externalKey = null): string
    {
        $directories = [
            'bootstrap/cache', 'storage/app/private', 'storage/framework/cache/data',
            'storage/framework/cache/locks', 'storage/framework/sessions',
            'storage/framework/views', 'storage/logs',
        ];

        foreach ($directories as $directory) {
            $path = $basePath.'/'.$directory;
            if (! is_dir($path) && ! mkdir($path, 0775, true) && ! is_dir($path)) {
                throw new RuntimeException('Cannot create deployment directory: '.$directory);
            }
        }

        $template = file_get_contents($basePath.'/.env.hostinger.example');
        if ($template === false) {
            throw new RuntimeException('Missing .env.hostinger.example deployment template.');
        }

        if ($externalKey !== null) {
            self::validateKey($externalKey);
        }

        // Restrict permissions for newly created files; do not change existing permissions.
        $previousMask = umask(0077);
        try {
            $file = fopen($basePath.'/.env', 'c+');
        } finally {
            umask($previousMask);
        }

        if ($file === false) {
            throw new RuntimeException('Cannot open the server .env file for deployment setup.');
        }

        try {
            if (! flock($file, LOCK_EX)) {
                throw new RuntimeException('Cannot lock the server .env file.');
            }

            $contents = stream_get_contents($file);
            if ($contents === false) {
                throw new RuntimeException('Cannot read the server .env file.');
            }

            $created = trim($contents) === '';
            $contents = $created ? $template : $contents;
            try {
                $values = Dotenv::parse($contents);
            } catch (InvalidFileException) {
                throw new RuntimeException('Server .env syntax is invalid. Correct it in Hostinger File Manager.');
            }
            $key = $values['APP_KEY'] ?? '';

            if ($key !== '') {
                self::validateKey($key);
            } else {
                $key = $externalKey ?? 'base64:'.base64_encode(random_bytes(32));
                if (preg_match('/^\h*APP_KEY\h*=/m', $contents)) {
                    $contents = preg_replace('/^\h*APP_KEY\h*=.*$/m', 'APP_KEY='.$key, $contents);
                } else {
                    $contents = rtrim($contents)."\nAPP_KEY=".$key."\n";
                }

                if ($contents === null) {
                    throw new RuntimeException('Cannot update APP_KEY in the server .env file.');
                }
            }

            // No rewrite when everything is configured: preserves custom settings and the key.
            if ($created || ($values['APP_KEY'] ?? '') === '') {
                rewind($file);
                if (fwrite($file, $contents) !== strlen($contents) || ! ftruncate($file, strlen($contents)) || ! fflush($file)) {
                    throw new RuntimeException('Cannot save the server .env file.');
                }
            }

            return $created
                ? 'Created production environment and configured application key on this server.'
                : 'Preserved server environment; application key is configured.';
        } finally {
            flock($file, LOCK_UN);
            fclose($file);
        }
    }

    private static function validateKey(string $key): void
    {
        $decoded = str_starts_with($key, 'base64:') ? base64_decode(substr($key, 7), true) : $key;

        if ($decoded === false || ! Encrypter::supported($decoded, 'AES-256-CBC')) {
            throw new RuntimeException('APP_KEY is empty or invalid. Supply an AES-256-CBC key; existing keys are never replaced automatically.');
        }
    }
}
