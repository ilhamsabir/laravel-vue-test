<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use App\Libraries\Helper;
use App\User;
use Auth;

class APIUserController extends Controller
{
	//
	public function __construct()
	{
		$this->middleware('auth');
	}

	// get data
	public function getData()
	{
		$response = DB::table('users')->get();

		$data = $response;
		$error = 0;
		$message = "success";

		$res = Helper::callbackFormatResponse($data, $error, $message);

		return $res;
	}

	// show by id
	public function edit($id)
	{
		$response = DB::table('users')
			->where('id','=', $id)
			->get();

		$response['password'] = null;
		$response['remember_token'] = null;

		$data = $response;
		$error = 0;
		$message = "success";

		$res = Helper::callbackFormatResponse($data, $error, $message);

		return $res;
	}

	// store
	public function store(Request $request)
	{
		$data = array(
			'name' => $request->get('name'),
			'email' => $request->get('email'),
			'password' => bcrypt($request->get('password')),
			'roles' => $request->get('roles'),
		);


		// $response =  DB::table('users')->insertGetId($data);
		$response = User::create([
			'name' => $request->get('name'),
			'email' => $request->get('email'),
			'password' => bcrypt($request->get('password')),
			'roles' => $request->get('roles'),
        ]);

		$callback_data = array(
			'id' => $response->id,
			'name' => $request->get('name'),
			'email' => $request->get('email'),
			'roles' => $request->get('roles'),
		);

		if($response) {
			$data = $callback_data;
			$error = 0;
			$message = "success";
		} else {
			$data = [];
			$error = 1;
			$message = "error";
		}

		$res = Helper::callbackFormatResponse($data, $error, $message);

		return $res;
	}

	public function update(Request $request)
	{

		$id =  $request->get('id');

		$data = array(
			'name' => $request->get('name'),
			'email' => $request->get('email'),
			'roles' => $request->get('roles'),
		);

		$response =  DB::table('users')
					->where('id','=', $id)
					->update($data);

		$callback_data = array(
			'id' => $id,
			'name' => $request->get('name'),
			'email' => $request->get('email'),
			'roles' => $request->get('roles'),
		);

		if($response) {
			$data = $callback_data;
			$error = 0;
			$message = "success";
		} else {
			$data = [];
			$error = 1;
			$message = "error";
		}

		$res = Helper::callbackFormatResponse($data, $error, $message);

		return $res;

	}

	public function updatePassword(Request $request)
	{

		$id =  $request->get('id');

		$data = array(
			'password' => bcrypt($request->get('password')),
		);

		$response =  DB::table('users')
					->where('id','=', $id)
					->update($data);

		if($response) {
			$data = $id;
			$error = 0;
			$message = "success";
		} else {
			$data = [];
			$error = 1;
			$message = "error";
		}

		$res = Helper::callbackFormatResponse($data, $error, $message);

		return $res;
	}

	public function delete(Request $request)
	{
		$id = $request->get('id');

		DB::table('users')->where('id','=', $id)->delete();

		$data = $id;
		$error = 0;
		$message = "success";

		$res = Helper::callbackFormatResponse($data, $error, $message);

		return $res;
	}



}
