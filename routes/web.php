<?php

use Illuminate\Support\Facades\Route;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

Route::get('/', function () {
    return inertia('welcome');
})->name('home');

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('dashboard', function () {
        return inertia('dashboard');
    })->name('dashboard');

    Route::get('/users', function () {
        return inertia('auth/auth-users');
    })->name('users');

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
