<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create(['name' => 'Author']);
        Role::create(['name' => 'Editor']);
        Role::create(['name' => 'Subscriber']);
        Role::create(['name' => 'Administrator']);
    }
}
