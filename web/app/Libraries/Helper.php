<?php
namespace App\Libraries;

/**
 * Libaries Static Ijin
 */
class Helper {

	// Main menu Data
	public static function callbackFormatResponse($data, $error, $message) {

		$res = [
			"data" => $data,
			"error" => $error,
			"message" => $message
		];

		return $res;
	}


	public static function apiCallback($response) {

		if (!$response) {
			$data = '';
			$error = 1;
			$message = "error";
		} else {
			$data =  $response;
			$error = 0;
			$message = "success";
		}

		$res = [
			"data" => $data,
			"error" => $error,
			"message" => $message
		];

	 	// return $res;
	 	return response()->json($res);
	}


}
