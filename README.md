# Laravel + ReactJS Test

This is an assessment test using Laravel and ReactJS to the candidate, Allan Steven Reyes

## Requirements

[PHP](https://www.php.net/downloads.php) (>= 7.4)

[Composer](https://getcomposer.org/download/)

[Node.js](https://nodejs.org/en/download/) (>= 14.x)

npm (>= 6.x)

[Docker Desktop](https://www.docker.com/products/docker-desktop/)


## Installation

- Clone the repository: 
```bash 
git clone git@github.com:sendoter/laravel-reactjs-test.git
```
- Install PHP dependencies: 
```bash
composer install
```

- Install Node.js dependencies: 
```bash
npm install
```

Start the development server: 
```bash
./vendor/bin/sail up -d
```

- Copy the .env.example file to .env and update the database configuration

- Generate an application key: 
```bash
./vendor/bin/sail artisan key:generate
```

- Run database migrations:
```bash
./vendor/bin/sail artisan migrate
```
Start the development server: 
```bash
npm run watch
```

## Access the Application

- You can access the application in your browser at [http://localhost/](http://localhost/)

## Stopping the development server:

- You can stop the development server with this command
```bash
./vendor/bin/sail down
```
