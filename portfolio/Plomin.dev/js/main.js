'use strict';

(function(){
	
	
	
}());


$(function($){
	$(function(){

		
		var nav = $('#headerNav');
		var openNav = $('#openNav');
		
		nav.on("click", "a", function (e) {
			e.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			nav.removeClass('visible');
			openNav.removeClass('active');
			$('body').removeClass('hidden');
			$('body,html').animate({scrollTop: top}, 1500);
		});
		
		
		openNav.on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('active')
			nav.toggleClass('visible');
			$('body').toggleClass('hidden');
		});

		$('.header-slider').slick({
			dots: true,
			arrows: false,
			//autoplay: true,
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
			//useTransform: true,
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

		
		
		function PhotoGallery(e){
			var container = $('#mainImagesGallery');
			var containerBlur = $('.main_images-gallery.blur');
			var content = $('.main_images-content');
			var contentActive = $('.main_images-content.active');
			var fullSizeLink = $('.main_images-expand');
			var closeBtn = $('.main_images-close');
			var photoGalleryImg = container.find('img');
			
			$.fn.imagesLoaded = function(callback){
			  var elems = this.filter('img'),
				  len   = elems.length;

			  elems.bind('load',function(){
				  if (--len <= 0){ callback.call(elems,this); }
			  }).each(function(){
				 // cached images don't fire load sometimes, so we reset src.
				 if (this.complete || this.complete === undefined){
					var src = this.src;
					// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
					// data uri bypasses webkit log warning (thx doug jones)
					this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
					this.src = src;
				 }  
			  }); 

			  return this;
			};

			photoGalleryImg.hide();
			$('#loader').show();
			photoGalleryImg.imagesLoaded(function(){
				$(this).show();
				$('#loader').hide();
			});
			
			
			container.find('a').on('click', function(e){
				e.preventDefault();
			});
			
			container.find(content).each(function(i){
				$(this).attr('id', 'image-' + ++i);
			});
			
			container.find(fullSizeLink).on('click', function(e){
				content.removeClass('active');
				$(this).parent(content).addClass('active');
				container.addClass('blur');
			});

			closeBtn.on('click', function(e){
				$(this).parent(content).removeClass('active');
				container.removeClass('blur');
			});
			
			$(document).mouseup(function (e){ // событие клика по веб-документу
				if (!content.is(e.target) // если клик был не по нашему блоку
					&& content.has(e.target).length === 0) { // и не по его дочерним элементам
					content.removeClass('active');
					container.removeClass('blur');
				}
			});
			
			// вызов функции при ресайзе окна
			$(window).on('resize load', function() {
				// функция центрирования элемента
				function alignCenter() {
					contentActive.css({
						// вычисление координат left и top
						left: ($(window).width() - contentActive.width()) / 2 + 'px',
						top: ($(window).height() - contentActive.height()) / 2 + 'px'
					});
				}
				
				alignCenter(contentActive);	
			});
		}
		
		PhotoGallery();
		
	});
	
}(jQuery));