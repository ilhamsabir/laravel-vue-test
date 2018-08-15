<?php

// use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'api'], function () {


	// api controller
	Route::get('/news', 'APINewsController@getList');
	Route::post('/news', 'APINewsController@post');
	Route::get('/news/update', 'APINewsController@update');
	Route::post('/news/delete', 'APINewsController@delete');

});