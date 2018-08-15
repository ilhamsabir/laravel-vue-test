<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Libraries\Helper;

class APINewsController extends Controller
{
	//
	public function getList()
	{
		$response = DB::table('news')->get();

		if($response) {
			$data = $response;
			$error = 0;
			$message = "success";
		} else {
			$data = '';
			$error = 1;
			$message = "error";
		}

		$res = Helper::callbackFormatResponse($data, $error, $message);

		return $res;
	}

	/**
	 * Show the application dashboard.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function post(Request $request)
	{
		$data = array(
			'title' => $request->get('title'),
			'description' => $request->get('description'),
		);

		$response = DB::table('news')->insertGetId($data);

		$callback_data = array(
			'id' => $response,
			'title' => $data['title'],
			'description' => $data['description'],
		);

		if($response) {
			$data = $callback_data;
			$error = 0;
			$message = "success";
		} else {
			$data = '';
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
			'title' => $request->get('title'),
			'description' => $request->get('description'),
		);

		$response =  DB::table('news')
					->where('id','=', $id)
					->update($data);

		$callback_data = array(
			'id' => $id,
			'title' => $data['title'],
			'description' => $data['description'],
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



	public function delete(Request $request)
	{
		$id = $request->get('id');

		DB::table('news')->where('id','=', $id)->delete();

		$data = $id;
		$error = 0;
		$message = "success";

		$res = Helper::callbackFormatResponse($data, $error, $message);

		return $res;
	}
}
