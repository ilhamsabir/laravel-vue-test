<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Libraries\Helper;

class APICrudController extends Controller
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

        $response = DB::table('news')->insert($data);

		if($response) {
			$data = '';
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
}
