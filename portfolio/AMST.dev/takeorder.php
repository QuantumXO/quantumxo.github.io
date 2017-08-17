<?php
	if(!empty($_POST['name']) && !empty($_POST['phoneNumber'])){
		
		$siteName = 'AMST.com';
		$product  = array(850, 'AMST - Армейские наручные часы');
		
		$emailAdmin = 'sikorskiy.dima@yandex.com';
		$subject = 'New massage';
		
		$name = to_clear($_POST['name']);
		$phoneNumber = to_clear($_POST['phoneNumber']);
		$url = 'url';  //to_clear($_POST['t_u']);
		
		$headers = "Content-Type: text/plain; charset=utf-8\r\n"
					."X-Mailer: PHP/ ".phpversion()."\r\n"
					."From: ".$siteName."\r\n";
		
		$message = "
	Поступил новый заказ на товар: «$product[1]». \r\n
	Стоимость заказа, выставленная клиенту: $product[0].00 грн. \r\n
	Имя: $name
	Адрес: ________________
	Телефон: $phoneNumber
	Url: $ur
	Количество: 1

	------------------------------------------------------------------------
	ВНИМАНИЕ!!! Не отвечайте на данное письмо, оно выслано автоматически!";
		
		if ( mail($emailAdmin, $subject, $message, $headers) ){
			echo 'Message is sent!';
		}else{
			echo 'Error with sending!';
		}
	}else{
		echo 'Error: fill all fields!';
	}

/*===Фильтрация входящих данных====*/
function to_clear($var) {
    $var = strip_tags(trim($var));
    return $var;
}

