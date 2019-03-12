<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/', function () {
// 	$redis = app()->make('redis');
// 	$redis->set('sandeep','bangarh');
// 	return $redis->get('sandeep');
//     print_r(app()->make('redis'));exit;
// });

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/messages','ChatController@getMessages');
Route::post('/sendMessage','ChatController@sendMessage');

Route::get('api/users', 'UsersController@index');
Route::post('api/messages', 'ChatController@index');
Route::post('api/messages/send', 'ChatController@store');
