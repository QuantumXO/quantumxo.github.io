    
$(function($){
    
    $(document).on("scroll",function(){
		
		var headerNav = $(".header-nav");
		if($(document).scrollTop() > 50){
			headerNav.removeClass("normal").addClass("scroll");
		} else{
			headerNav.removeClass("scroll").addClass("normal");
		}
	});
    
    $(".header_nav-item").find('a:not(#openBasket)').on("click", scroll);
    
	function scroll(e){
		e.preventDefault();
		var anchor = $(this);
		$('body').stop().animate({
			scrollTop: ($(anchor.attr('href')).offset().top - 50)
		}, 777);
		return false;
	}
	
    $('.mask').mask('+38(099) 999-99-99');

	function takeOrderFunc(){
		var orderEl = $('.takeOrder');
		
		orderEl.each(function(){
			$(this).on('click', takeOrder);
		});
		
		
		function takeOrder(){

			var container = $(this).closest('.form');
			var name = container.find('.form-name');
			var phoneNumber = container.find('.form-number');
			var result = container.find('.result');
			
			$.post('/takeorder.php', 
			   {
					name: name.val(),
					phoneNumber: phoneNumber.val(),
				}, 
			   function(data){
					result.html(data);
			});
			
			console.log(name.val());
			console.log(phoneNumber.val());
		}
	}
	takeOrderFunc();	

}(jQuery));
    
function modalFunc(){
/////////////////////
	var modal = document.getElementById('basket');
	//var open = document.getElementById('openBasket');
	var open = document.getElementsByClassName('openBasket');
	var close = document.getElementsByClassName('basket-close')[0];

	for(var i=0; i<open.length; i++){
		open[i].onclick = modalOpen;
	}

	function modalOpen(e){
		e.preventDefault();
		modal.style.display = 'flex';
		document.body.style.overflow = 'hidden';
	}

	close.onclick = function(){
		modal.style.display = 'none';
		document.body.style.overflow = 'auto';
	};

	window.onclick = function(e){
		if(e.target == modal){
			modal.style.display = 'none';
			document.body.style.overflow = 'auto';
		}
	};	
}
modalFunc();
	
    function CountBox() {
		dateNow = new Date();
		amount = ((23 - dateNow.getHours())*60*60 + (59 - dateNow.getMinutes())*60 + (60 - dateNow.getSeconds()))*1000;
		delete dateNow;
		if (amount < 0) {
			out = "<div class='countbox-num'><div class='countbox-hours1'><span></span>0</div><div class='countbox-hours2'><span></span>0</div><div class='countbox-hours-text'></div></div>" +
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div class='countbox-mins1'><span></span>0</div><div class='countbox-mins2'><span></span>0</div><div class='countbox-mins-text'></div></div>" +
			"<div class='countbox-space'></div>" +
			"<div class='countbox-num'><div class='countbox-secs1'><span></span>0</div><div class='countbox-secs2'><span></span>0</div><div class='countbox-secs-text'></div></div>";
			var list = document.getElementById("counterWrap");
			for (var i = 0; i < list.length; i++) {
				list[i].innerHTML = out;
			}
			setTimeout("CountBox()", 10000)
		} else {
			out = "";
			amount = Math.floor(amount / 1e3);
			days = Math.floor(amount / 86400);
			days1 = (days >= 10) ? days.toString().charAt(0) : '0';
			days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);
			amount = amount % 86400;
			hours = Math.floor(amount / 3600);
			hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
			hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
			amount = amount % 3600;
			mins = Math.floor(amount / 60);
			mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';
			mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
			amount = amount % 60;
			secs = Math.floor(amount);
			secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';
			secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);
			out = "<div class='countbox-num'><div class='countbox-hours1'><span></span>" + hours1 + "</div><div class='countbox-hours2'><span></span>" + hours2 + "</div><div class='countbox-hours-text'>Часов</div></div>" + "</div><div class='countbox-hours-text'></div></div>" +
			"<div class='countbox-space'>:</div>" +
			"<div class='countbox-num'><div class='countbox-mins1'><span></span>" + mins1 + "</div><div class='countbox-mins2'><span></span>" + mins2 +"</div><div class='countbox-mins-text'>Минут</div></div>" + "</div><div class='countbox-mins-text'></div></div>" +
			"<div class='countbox-space'>:</div>" +
			"<div class='countbox-num'><div class='countbox-secs1'><span></span>" + secs1 + "</div><div class='countbox-secs2'><span></span>" + secs2 + "</div><div class='countbox-secs-text'>Секунд</div></div>";
			var list = document.getElementsByClassName("countbox");
			for (var i = 0; i < list.length; i++) {
				list[i].innerHTML = out;
			}
			setTimeout("CountBox()", 1e3)
		}
	}
CountBox()
