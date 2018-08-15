# Laravel Vue


Getting Started
=============


Change Folder Permision
-------------


On Unix Based OS, some folder need to change the permission to 775 or o+w

- web/storage => 775
- web/bootstrap/cache => 775


>	chmod -R o+w web/storage

>	chmod -R o+w web/bootstrap/cache

Add Environment Variable
-------------

Create .env file on web folder

>	cd web && touch .env

Ask .env content from other developer


Install PHP Depedencies
-------------

Move to root folder and install PHP Depedencies

>	composer install


Install JavaScript Depedencies
-------------

Move to root folder and install JavaScript Depedencies

>	npm install

Install Webpack Globaly (require webpack)

>	npm install -g webpack



Build Webpack
-------------

Run webpack build

>	npm run dev
>
>
>	npm run prod