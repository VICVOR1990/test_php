<?php

if($_POST['login']=='user' && $_POST['password']='1234'){
	echo json_encode(["message"=>"User accepted"] );
}else{
	echo json_encode(["message"=>"Incorect data"]);
}
