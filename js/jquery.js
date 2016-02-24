var $name = $("#name");
var $email = $("#email");

var $nameChecker = function stringChecker () {

	if($name.val().length > 0) {
		
			$name.next().hide(400);
	
	}else{
	
		$name.next().show(400);
	}
}
var $emailChecker = function stringChecker () {
	
	if($email.val().length > 0) {
		
		$email.next().hide(400);
	
	}else{
	
		$email.next().show(400);
	}
}

$("#name").keyup($nameChecker);

$("#email").keyup($emailChecker);