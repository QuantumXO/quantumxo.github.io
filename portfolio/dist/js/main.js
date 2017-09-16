/////////////////////////////////////////////////
;function Slider(settings){
	var slider = document.getElementById(settings.sliderId);
	var sliderContainer = slider.getElementsByClassName('slider-container')[0];
	var sliderItems = slider.getElementsByClassName('slider-item');
	var sliderWidth = parseFloat(getComputedStyle(sliderContainer).width);
	var singleSlideWidth = 0;
	var sliderButtons = slider.getElementsByClassName('slider-btn');
	var self = this;
	
	
	var showSlides = function(a){
		for(var i=0; i<sliderItems.length; i++){
			if(sliderItems[i].style.left !== ''){
				var current = parseFloat(sliderItems[i].style.left);
				sliderItems[i].style.left = (current + (singleSlideWidth * a)) + 'px';
			}else{
				sliderItems[i].style.width = singleSlideWidth + 'px';
				sliderItems[i].style.left = (singleSlideWidth * i) + 'px';
			}
			
		}
	};
	
	this.move_prev = function(){
		if(parseFloat(sliderItems[sliderItems.length - 1].style.left >= sliderWidth)){
			showSlides(-1);
		}
	};
	this.move_next = function(){
		if(parseFloat(sliderItems[0].style.left < 0)){
			showSlides(1);
		}
	};
	
	var init = function(){
		if(!settings.slidesToShow && !+settings.slidesToShow){
			settings.slidesToShow = 1;
		}
		singleSlideWidth = sliderWidth/settings.slidesToShow;
		
		showSlides();
		
		for(var i=0; i<sliderButtons.length; i++){
			sliderButtons[i].addEventListener('click', function(){
				self['move_'+this.dataset.action]();
			});
		}
	};
	
	init();
	
	
}






/*
function sliderFunc(){
	////////////////////////
	var i;
	var dots = document.getElementsByClassName('slide-dot');
	var sliderArrow = document.getElementById('sliderArrow');
	var slideItem = document.getElementsByClassName('slider-item');
	var slideIndex = 0;
	
	
	sliderArrow.onclick = switchSlide;
	
	function switchSlide(e){
		var target = e.target.getAttribute('data-slide-arrow');
		//console.log(target);
		if(target == 'slidePrev'){
			return showSlides(slideIndex - 1);
		}else{
			return showSlides(slideIndex + 1);
		}
		console.log(slideIndex);
	}


	if(slideIndex > slideItem.length){
		slideIndex = 0;
	}
	if(slideIndex < 1){
		slideIndex = slideItem.length;
	}

	for(i=0; i<slideItem.length; i++){
		slideItem[i].setAttribute('data-slide-index', i);
		slideItem[i].style.display = 'none';
		slideItem[i].insertAdjacentHTML('afterbegin', "<div class='slide-counter'>" + Number(i + 1) + '/' + slideItem.length);
	}

	for(i=0; i< dots.length; i++){
		dots[i].setAttribute('data-dot-index', i);
		dots[i].className = dots[i].className.replace('active', '');
	}

	//dots[slideIndex-1].classList.add('active');
	//slideItem[slideIndex-1].style.display = 'block';

}
sliderFunc();	
*/	
 



/////////////////////////////////////////////////
