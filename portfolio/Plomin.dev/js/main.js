'use strict';

(function(){
	
	
	
}());


$(function($){
	$(function(){

		$('#openNav').on('click', function(e){
			$(this).toggleClass('active')
			e.preventDefault();
			$('#headerNav').toggleClass('visible');
		});

		$('.header-slider').slick({
			dots: true,
			arrows: false,
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			lazyLoad: 'ondemand',
			autoplaySpeed: 30000,
		});

		$('#eventsSlider').slick({
			dots: true,
			arrows: false,
			autoplay: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			lazyLoad: 'ondemand',
			autoplaySpeed: 30000,
			dotsClass: 'events-dots slick-dots',
		});

		 $("#mainGalleryTabs").tabs({
			active: 1,
		 });

		$('.main_gallery-video').slick({
			dots: false,
			arrows: true,
			autoplay: true,
			infinite: true,
			centerMode: true,
			slidesToScroll: 1,
			variableWidth: true,
			lazyLoad: 'ondemand',
			responsive: [
				{
					breakpoint: 1920,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				},
			],
			prevArrow: '<button type="button" class="main_gallery-arrow main_gallery-prev"></button>',
			nextArrow: '<button type="button" class="main_gallery-arrow main_gallery-next"></button>',
		});

	});
}(jQuery));