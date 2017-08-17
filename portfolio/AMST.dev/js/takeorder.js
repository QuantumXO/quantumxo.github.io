/***
 * takeOrder - jQuery Plugin
 * version: 1.7.9 (Sat, 05 Aug 2017)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://salesrecord.ru/to.html
 * License: www.salesrecord.ru/to.html#license
 *
 * Copyright 2014-2017 Alex Zakharov - az@salesrecord.ru
 ***/
$(function(){var to={
    
    minName : 2,                    // минимальное кол-во символов в имени покупателя
    minPhone : 0,                   // минимальное кол-во цифр в номере телефона    
    minMail : 0,                    // минимальное кол-во символов в адресе
    yandexKod : '25181798',         // номер yandex счетчика (пример 25181798)
    yandexCel : 'zakaz',            // цель в yandex метрике (пример zakaz)
    topF : 200,                     // смещение формы относительно верхнего края экрана
    leftF : 350,                    // смещение формы относительно левого края экрана
    
    bg_baza : '#ff8a28',            // кнопка, базовый цвет
    bg_grad : '#ffab02',            // кнопка, градиент
    bg_hovr : '#e87b0e',            // кнопка, базовый цвет при выделении
    txt_clr : '#F3EEDF',            // кнопка, цвет текста
    
    fCt: 'Закрыть',
    fH : 'Для оформление заказа заполните поля формы.',
    fNp : 'Ваше имя',
    fNt : 'необходимо для оформления заказа',
    fNl : 'Ваше имя',
    fPp : 'номер телефона',
    fPt : 'перед отправкой заказа наш менеджер свяжется с Вами',
    fPl : 'номер контактного телефона',
    fMp : 'адрес доставки',
    fMt : 'необходимо для оформления заказа',
    fMl : 'адрес доставки',
    fSv : 'Оформить заказ',
    fErr : 'Заполните это поле',   
    mH : 'Благодарю Вас за заказ!',
    mP1 : 'Ваш заказ успешно принят и поставлен в обработку.',
    mP2 : 'В ближайшее время Ваш заказ будет подготовлен и отправлен на указанный Вами адрес.',
    mP3 : 'При необходимости наш менеджер перезвонит Вам для уточнения данных по заказу.',
    iPd : 'Оформляя заказ на сайте, я даю согласие на обработку своих персональных данных.',
    win1251 : 0                     // 1 - win1251    
    };
var minName = to.minName
	, minMail = to.minMail
	, minPhone = to.minPhone
	, yandexKod = to.yandexKod
	, yandexCel = to.yandexCel
	, fCt = to.fCt
	, fH = to.fH
	, fNp = to.fNp
	, fNt = to.fNt
	, fNl = to.fNl
	, fPp = to.fPp
	, fPt = to.fPt
	, fPl = to.fPl
	, fMp = to.fMp
	, fMt = to.fMt
	, fMl = to.fMl
	, fSv = to.fSv
	, fErr = to.fErr
	, mH = to.mH
	, mP1 = to.mP1
	, mP2 = to.mP2
	, mP3 = to.mP3
	, iPd = to.iPd
	, topF = to.topF
	, leftF = to.leftF
	, t_o = 0;
if (to.win1251) {
	fCt = decodeUtf8(to.fCt);
	fH = decodeUtf8(to.fH);
	fNp = decodeUtf8(to.fNp);
	fNt = decodeUtf8(to.fNt);
	fNl = decodeUtf8(to.fNl);
	fPp = decodeUtf8(to.fPp);
	fPt = decodeUtf8(to.fPt);
	fPl = decodeUtf8(to.fPl);
	fMp = decodeUtf8(to.fMp);
	fMt = decodeUtf8(to.fMt);
	fMl = decodeUtf8(to.fMl);
	fSv = decodeUtf8(to.fSv);
	fErr = decodeUtf8(to.fErr);
	mH = decodeUtf8(to.mH);
	mP1 = decodeUtf8(to.mP1);
	mP2 = decodeUtf8(to.mP2);
	mP3 = decodeUtf8(to.mP3);
	iPd = decodeUtf8(to.iPd)
}
cssTO();
htmlTO();
$('.takeOrder').click(function (e) {
	e.preventDefault();
	t_o = $(this).data('to');
	if ($(this).attr('data-off') !== undefined) {
		showF($(this).data('off'))
	}
	else showF(0)
});
jQuery(document).on('click', '#to_close', function () {
	hideF(300)
});
$('#to_submit').click(function (e) {
	e.preventDefault();
	checkInput();
	if ($(this).hasClass('to_disable')) lightEmpty();
	else procF()
});
jQuery(document).on('click', '#to_submes', function (e) {
	e.preventDefault();
	hideF(300)
});

function cssTO() {
	var cssF = '<style type="text/css">#to_wrapper{display:none;background:none repeat scroll 0 0 rgba(0,0,0,0.7);font:13px Arial,sans-serif;color:#333333;bottom:0;left:0;right:0;top:0;pointer-events:none;position:fixed;z-index:99999;letter-spacing:0;text-shadow:none;}#to_wrapper:target{display:block;pointer-events:auto;}#to_form{width:300px;font-family:Arial,sans-serif;font-size:13px;}#to_form > form{position:relative;}#to_mess{width:320px;}#to_form,#to_mess{position:absolute;background:none repeat scroll 0 0 #FFFFFF;box-shadow:0 10px 25px rgba(0,0,0,0.3);border-radius:3px;border:5px solid #45770a;}#to_form p{font-size:12px;margin:0 0 10px 0;color:#333;background-color:#dedede;height:30px;text-align:center;line-height:32px;}#to_form label{margin-left:10px;line-height:23px;}#to_form span{background-color:#FFFFFF;padding:0 3px;visibility:hidden;position:absolute;top:9px;right:13px;font-size:12px;color:#c41153;}.to_div{position:relative;}#to_name,#to_phone,#to_mail{width:270px;margin:0 10px 7px 10px;height:25px;padding-left:5px;border:1px solid #cccccc;}#to_mess h5{font-size:12px;margin:0 0 10px 0;color:#333;background-color:#dedede;height:30px;text-align:center;line-height:32px;}#to_mess p{margin:5px 10px;line-height:16px;}#to_submit,#to_submes{width:220px;margin:10px 10px 10px 9px;height:30px;border:1px solid ' + to.bg_grad + ';background:' + to.bg_baza + ';background:linear-gradient(to top,' + to.bg_baza + ',' + to.bg_grad + ');box-shadow:1px 1px 1px rgba(0,0,0,0.5);color:' + to.txt_clr + ';font-weight:bold;}#to_submit:hover,#to_submes:hover{background:' + to.bg_hovr + ';background:linear-gradient(to top,' + to.bg_grad + ',' + to.bg_hovr + ');}#to_close{background:none repeat scroll 0 0 rgba(90,90,90,0.7);border-radius:12px;border:1px solid #c41153;box-shadow:1px 1px 3px #000000;color:#FFFFFF;font-weight:bold;font-size:15px;line-height:17px;position:absolute;right:-14px;text-align:center;text-decoration:none;top:-13px;width:21px;padding-bottom:4px;z-index:5;}#to_close:hover{color:#c41153;}#to_takeorder{font-size:10px;font-style:italic;position:absolute;right:10px;bottom:7px;text-decoration:none;cursor:pointer;color:#aaa;}#to_iPd{padding:5px 12px 10px 12px;font-size:90%;text-align:center;}</style>';
	var mes = 'TakeOrder';
	jQuery('head').append(cssF)
}

function htmlTO() {
	var yandex = '';
	if (yandexKod > '' && yandexCel > '') yandex = ' onclick="yaCounter' + yandexKod + '.reachGoal(\'' + yandexCel + '\'); return true;"';
	var htmlF = '<div id="to_wrapper"><div id="to_form" style="left:' + leftF + 'px;top:' + topF + 'px;"><a id="to_close" title="' + fCt + '" href="#">x</a><form method="post" action="#"><p>' + fH + '</p><div class="to_div"><label>' + fNl + '</label><input type="text" name="to_name" id="to_name" placeholder="' + fNp + '" value="" title="' + fNt + '"/><br /><span>' + fErr + '</span></div><div class="to_div"><label>' + fPl + '</label><input type="text" name="to_phone" id="to_phone" placeholder="' + fPp + '" value="" title="' + fPt + '"/><br /><span>' + fErr + '</span></div><div class="to_div"><label>' + fMl + '</label><input type="text" name="to_mail" id="to_mail" placeholder="' + fMp + '" value="" title="' + fMt + '"/><br /><span>' + fErr + '</span></div><input type="submit" name="to_submit" id="to_submit"' + yandex + ' value="' + fSv + '" />' + av() + '</form><div id="to_iPd">' + iPd + '</div></div></div>';
	$('body').append(htmlF)
}

function messTo() {
	var htmlM = '<div id="to_mess" style="left:' + leftF + 'px;top:' + topF + 'px;"><a id="to_close" style="background-color:rgba(90,90,90,0.5)" title="' + fCt + '" href="#">x</a><form method="post" action="#"><h5>' + mH + '</h5><p>' + mP1 + '</p><p>' + mP2 + '</p><p>' + mP3 + '</p><input type="submit" name="to_submes" id="to_submes" value="' + fCt + '" />' + av() + '</form></div>';
	jQuery(document).find('#to_wrapper').empty().css('background-color', 'rgba(0,0,0,0.2)').append(htmlM)
};

function hideF(t) {
	$('#to_wrapper').css('pointer-events', 'none').hide(t)
};

function showF(o) {
	$('.to_div').css('display', 'table');
	if (o == 2) {
		$('.to_div').eq(-1).css('display', 'none');
		$('.to_div').eq(0).css('display', 'none')
	}
	if (o == 1) {
		$('.to_div').eq(-1).css('display', 'none')
	}
	$('#to_wrapper').show(300).css('pointer-events', 'auto')
};

function av() {
	var av = '<a id="t' + 'o_tak' + 'eorde' + 'r" hre' + 'f="ht' + 'tp:/' + '/s' + 'ales' + 'reco' + 'rd.r' + 'u">Tak' + 'eOrd' + 'er</a>';
	return av
}

function procF() {
	var t_n = $("#to_name").val()
		, t_p = $("#to_phone").val()
		, t_m = $("#to_mail").val()
		, t_u = window.location.href;
	transmF(t_n, t_p, t_m, t_u)
}

function transmF(t_n, t_p, t_m, t_u) {
	if (!t_o) t_o = 1;
	$.ajax({
		url: 'takeorder.php'
		, type: 'POST'
		, data: {
			t_n: t_n
			, t_p: t_p
			, t_m: t_m
			, t_k: 314
			, t_u: t_u
			, t_o: t_o
		}
		, success: function (res) {
			if (res === '1') {
				messTo();
				setTimeout(function () {
					hideF(300)
				}, 5000)
			}
			else {
				alert("Error!")
			}
		}
		, error: function () {
			alert("Error!")
		}
	})
}

function lightEmpty() {
	$('.to_empty').css({
		'border-color': '#c41153'
	}).next().next().css({
		'visibility': 'visible'
	});
	setTimeout(function () {
		$('.to_empty').removeAttr('style').next().next().removeAttr('style')
	}, 1000)
}

function checkInput() {
	var fl = 0
		, ch = $("#to_name");
	if (ch.val().length < minName && $('.to_div').eq(0).css('display') != 'none') {
		ch.addClass('to_empty');
		fl += 1
	}
	else ch.removeClass('to_empty');
	ch = $("#to_phone");
	if (ch.val().replace(/\D+/g, '').length < minPhone) {
		ch.addClass('to_empty');
		fl += 1
	}
	else ch.removeClass('to_empty');
	ch = $("#to_mail");
	if (ch.val().length < minMail && $('.to_div').eq(-1).css('display') != 'none') {
		ch.addClass('to_empty');
		fl += 1
	}
	else ch.removeClass('to_empty');
	var btn = $('#to_submit');
	if (fl > 0) {
		if (!btn.hasClass('to_disable')) {
			btn.addClass('to_disable')
		}
	}
	else btn.removeClass('to_disable')
}

function decodeUtf8(s) {
	var bb = ''
		, c = 0
		, cc = 0
		, m1 = {
			1106: 1040
			, 8216: 1041
			, 8217: 1042
			, 8220: 1043
			, 8221: 1044
			, 8226: 1045
			, 1027: 1025
			, 8211: 1046
			, 8212: 1047
			, 65533: 1048
			, 8482: 1049
			, 1113: 1050
			, 8250: 1051
			, 1114: 1052
			, 1116: 1053
			, 1115: 1054
			, 1119: 1055
			, 160: 1056
			, 1038: 1057
			, 1118: 1058
			, 1032: 1059
			, 164: 1060
			, 1168: 1061
			, 166: 1062
			, 167: 1063
			, 1025: 1064
			, 169: 1065
			, 1028: 1066
			, 171: 1067
			, 172: 1068
			, 173: 1069
			, 174: 1070
			, 1031: 1071
			, 176: 1072
			, 177: 1073
			, 1030: 1074
			, 1110: 1075
			, 1169: 1076
			, 181: 1077
			, 182: 1078
			, 183: 1079
			, 1105: 1080
			, 8470: 1081
			, 1108: 1082
			, 187: 1083
			, 1112: 1084
			, 1029: 1085
			, 1109: 1086
			, 1111: 1087
		}
		, m2 = {
			8216: 1105
			, 1026: 1088
			, 1027: 1089
			, 8218: 1090
			, 1107: 1091
			, 8222: 1092
			, 8230: 1093
			, 8224: 1094
			, 8225: 1095
			, 8364: 1096
			, 8240: 1097
			, 1033: 1098
			, 8249: 1099
			, 1034: 1100
			, 1036: 1101
			, 1035: 1102
			, 1039: 1103
		};
	for (var i = 0; i < s.length; i++) {
		c = s.charCodeAt(i);
		if (c === 1056) {
			i++;
			cc = m1[s.charCodeAt(i)];
			bb += String.fromCharCode(cc)
		}
		else if (c === 1057) {
			i++;
			cc = m2[s.charCodeAt(i)];
			bb += String.fromCharCode(cc)
		}
		else bb += String.fromCharCode(c)
	}
	return bb
}
});