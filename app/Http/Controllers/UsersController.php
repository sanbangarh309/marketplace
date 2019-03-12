<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UsersController extends Controller
{
    public function index()

    {
        return User::orderBy('name')->where('id', '!=', auth()->user()->id)->get();
    }
}
