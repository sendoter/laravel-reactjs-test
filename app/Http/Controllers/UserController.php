<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('roles')->get();

        return response()->json($users);
    }

    public function store(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'roles' => 'required|array|min:1',
            'roles.*' => 'exists:roles,id'
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email']
        ]);

        $user->roles()->attach($validatedData['roles']);

        return response()->json(['message' => 'User created'], 201);
    }
}
