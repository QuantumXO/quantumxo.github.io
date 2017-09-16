////////////////////////
//// JQuery
////////////////////////

// $(document).ready(function(){}) === $(function(){})

var $j = jQuery.noConflict();

//////////
//// Выборка
///////////////////
	$('a[href$=.jpg]');  // Заканчивается на...
	$('a[href^=http]');  // Начинается на...
	$('a[href*=moto]');  // Содержит ...
	
// Filters
	$('p:contains(word)');  // Содержит что-то
	$('table tr:odd');     // Все не четные
	$('table tr:even');    // Все четные
	$('img:not(#id)');     // Отрицание
	$('div:has(img)');     // Содержит
	
// Fn 
	$('p').text();  // Выбор текста и замена
	$('a').hide();  // (have parameters)
	$('a').show();  // (have parameters)
	//
	$('a').hide().show();  // Цепная функция

// height / width
	$('img').height(100).width(100);

// Change and view code html
	$('ul').html();

// fadeIn / fadeOut / fadeTo
	$('img').fadeOut(3000); // (duration, function())
	$('img').fadeIn(3000);  // (duration, function())
	$('img').fadeTo(3000, .1); // (duration, step)
	$('img').fadeTggle();   // (change fades)
	
// SlideUp / SlideDown	
	$('img').SlideUp(3000);	
	$('img').SlideDown(3000);	
	
// Attr
	$('img').attr('height'); // read or change attributes
	$('img').removeAttr('height'); // delete
	
// Css	
	$('h1').css({'color':'red', 'font-size':'22px'});
	
// Animate
	$('img').css({'border':'1px solid red'}).animate({'width':'150px'}, 3000, function(){});
	
// before / after / append / prepend
	//prepend(); - внутрь, до кода
	//append();  - внутрь, в конец ( после кода )
	
// each / $(this)	
	$('p').each(function() {
		//Code for each el (ex. p)
		if($(this).width() > 10){
			$(this).fadeOut(3000);
		}
	});
	
// Size
	// Don't work in 3.0+
	
// Clone / remove
	var a = $('img').clone();
	//$('#id').append(a);
	var b = $('img').remove();
	//$('#mainContent').append(b);	
	
//////////
//// Events
///////////////////	

	// mouseover // mouseout // mousemove // mousedown // mouseup // mouseenter // mouseleave
	// click // dblclick
	// submit
	// focus // blur
	// change
	// reset
	// keypress // keydown // keyup
	// load ( <3.x ) // resize // scroll // onload ( <3.x )
	// hover // toggle (click)( <3.x )
	// paste
	
	$('img').hover(function(){
		$(this).addClass('some');      //(if hover)
	},function(){
		$(this).removeClass('some');   //(else)
	});	
	
// .pageX(Y) // .screenX(Y) // .ctrlKey // .altKey // .shiftKey
// .target (where was event) // .id
	
	e.preventDefault();	// return false // 
	
// :checkbox:checked // :select:selected
	
// Value of ( input / select / textarea )
	// $('#id').val();
	
// submit // focus // blur // change	
	
$('#email').focus(function(){ $(this).addClass('focus')}).blur(function(){ $(this).removeClass('focus')});	
	
	
	
	