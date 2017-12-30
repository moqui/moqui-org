//Modernizr touch detect
Modernizr.load({
	test: Modernizr.touch,
	yep :['/css/touch.css'],
	nope: []
});

var test = false;
if ("document" in self && !("classList" in document.createElement("_"))){
	test = true;
}

Modernizr.load({
  test: test,
  yep : ['external/classList/classList.js'],
  nope: []
});

$(document).ready(function() {


//Colorbox responsive
// $.colorbox.settings.maxWidth  = '95%';
// $.colorbox.settings.maxHeight = '95%';

//colorBox resize function
var resizeTimer;
function resizeColorBox()
{
	if (resizeTimer) clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
			if ($('#cboxOverlay').is(':visible')) {
					$.colorbox.load(true);
			}
	}, 300);
}

//resize ColorBox when resizing window or changing mobile device orientation
$(window).resize(resizeColorBox);
window.addEventListener("orientationchange", resizeColorBox, false);


//Tooltip
$('.custom-tooltip').tooltip();


//Mobile menu
$('#navigation').mobileMenu({
	triggerMenu:'#navigation-toggle',
	subMenuTrigger: ".sub-nav-toggle",
	animationSpeed: 500 
});

	
var $block =$('<div/>', { 'class':'top-scroll' }).append('<a href="#"/>').hide().appendTo('body')
	.click(function () { $('body,html').animate({ scrollTop: 0 }, 800); return false; });
		
		
//initialization
var didScroll = false;
$(window).scroll(function () { didScroll = true; });
setInterval(function scrollHandler() {
	if (didScroll) {
		didScroll = false;
		if ($(this).scrollTop() > 35) {
			showElem();
		} else {
			hideElem();
		}
	}
}, 30);

//navigation
function hideElem(){
	// $('.main-nav')[0].classList.remove('fixed-pos');
	$block.fadeOut();
}
	
function showElem(){
	// $('.main-nav')[0].classList.add('fixed-pos');
	$block.fadeIn();
}
}); // end document.ready

//Button hover
function init_Button() {
	$('.circle-button').on('mouseenter mouseleave', function(e){
		e.preventDefault();
		$(this)[0].classList.toggle('hover');
	});
}


//Button info hover
function init_ButtonInfo() {
	$('.circle-info-wrapper').on('mouseenter mouseleave', function(e){
	    e.preventDefault();
	    $(this)[0].classList.toggle('hover');
    });
}

//Roundabout slider
function init_Roundabout() {
	$('.roundabout').roundabout({
		tilt: 0.4,
		minScale:0.5,
		minOpacity: 1,
		duration: 400,
		easing: 'easeOutQuad',
		enableDrag: true,
		dropEasing: 'easeOutBack', 
		dragFactor: 2,
		responsive: true
	});
}

//Revo slider
function init_RevoSlider() {
	$('.banner').revolution({
		delay: 8000,
		startheight: 450,
		startwidth: 1160,
		
		hideThumbs: 0,
		thumbWidth: 170,					// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
		thumbHeight: 106,
		thumbAmount: 3,

		navigationType:'thumb',				// bullet, thumb, none
		navigationArrows:'none',			// nexttobullets, solo (old name verticalcentered), none

		navigationHAlign: 'center',			// Vertical Align top,center,bottom
		navigationVAlign: 'bottom',			// Horizontal Align left,center,right
		navigationHOffset: 0,
		navigationVOffset: -45,

		touchenabled:'on',					// Enable Swipe Function : on/off
		onHoverStop:'on',					// Stop Banner Timet at Hover on Slide on/off

		stopAtSlide:-1,						// Stop Timer if Slide 'x' has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		stopAfterLoops:-1,					// Stop Timer if All slides has been played 'x' times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

		hideCaptionAtLimit:0,				// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		hideAllCaptionAtLilmit: 687,		// Hide all The Captions if Width of Browser is less then this value
		
		fullWidth:'off',
		hideTimerBar: 'on',
		shadow: 0							//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)

	});
}

//Revo slider
function init_RevoSliderFull() {
	$('.fullscreenbanner').revolution({
		delay: 8000,
		startheight: 629,
		startwidth: 1920,
	
		navigationType:'none',				// bullet, thumb, none
		navigationArrows:'solo',			// nexttobullets, solo (old name verticalcentered), none
		navigationStyle:'round',			// Possible values: 'preview1', 'preview2','preview3','preview4','round', 'square', 'round-old', 'square-old', 'navbar-old'

		soloArrowLeftHalign:'left',
		soloArrowLeftValign:'center',
		soloArrowLeftHOffset:30,
		soloArrowLeftVOffset:0,

		soloArrowRightHalign:'right',
		soloArrowRightValign:'center',
		soloArrowRightHOffset:30,
		soloArrowRightVOffset:0,

		touchenabled:'on',					// Enable Swipe Function : on/off
		onHoverStop:'on',					// Stop Banner Timet at Hover on Slide on/off

		stopAtSlide:-1,						// Stop Timer if Slide 'x' has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		stopAfterLoops:-1,					// Stop Timer if All slides has been played 'x' times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

		hideThumbs: 0,	
		hideCaptionAtLimit:0,				// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		hideAllCaptionAtLilmit: 463,		// Hide all The Captions if Width of Browser is less then this value
		
		fullWidth:'off',
		hideTimerBar: 'on',
		shadow: 0,							//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
		fullWidth:'off'						// Turns On or Off the Fullwidth Image Centering in FullWidth Modus

	});
}

//Services hover
function init_ServicesInfo() {
	var $slides = $('.decorated-slider .swiper-slide');
	var $desctipt = $('.service__description');

	$slides.hover( function (e) {
		$slides.removeClass('swiper-slide--active');
		$(this)[0].classList.add('swiper-slide--active');

		var current = $(this).attr('data-order');

		$desctipt.hide(0);
		$('.' + current).show(0);
	});
}


//Timeline
function init_Timeline() {
	$( '.timeline' ).timeLineG({
		maxdis:280,
		mindis:100,
		wraperClass:'timeline-wrap',
	});
}


//Magnific popup
function init_Gallery() {
	//Pop up fuction for gallery elements	
		
	//pop up for photo (object - images)
	$('.popup-item').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

	//pop up for photo (object - title link)	
	$('.popup-item--link').magnificPopup({
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});		
}


//Masonry
//Blog
function init_BlogMasonry() {
	var $container = $('#post-blocks-container');
	// initialize
	$container.masonry({
	  'columnWidth': '.block-width-1',
	  itemSelector: '.post--preview-block',
	  'gutter': 30			
	});
}


//Gallery
function init_GalleryMasonry() {
	var $container = $('#gallery-items-container');
	// initialize
	$container.masonry({
	  'columnWidth': '.item-width-1',
	  itemSelector: '.gallery-item--random',
	  'gutter': 12			
	});
}


//Google map
function init_Map() {
	var myLatlng = new google.maps.LatLng(40.764324,-73.973057);
	var myOptions = {
		zoom: 11,
		center: myLatlng,
		disableDefaultUI: true,
		panControl: true,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.DEFAULT
		},

		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
		},
		streetViewControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		}
	var map = new google.maps.Map(document.getElementById("contact__map"), myOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title:"40.764324,-73.973057"
	});
	var infowindow = new google.maps.InfoWindow({
		content: "<b>My Adress:</b><br> 1 Central Park New York 10019"
		});
		google.maps.event.addListener(marker, "click", function() {
			infowindow.open(map, marker);
		});
}


//Slider Range
function init_SliderRange() {
	$( '#slider-range__item' ).slider({
		range: true,
		min: 0,
		max: 60,
		values: [ 10, 30 ],
		slide: function( event, ui ) {
			$( '#amount' ).val( '$' + ui.values[ 0 ] + ' - $' + ui.values[ 1 ] );
		}
	});
	$( '#amount' ).val( '$' + $( '#slider-range__item' ).slider( 'values', 0 ) +
	' - $' + $( '#slider-range__item' ).slider( 'values', 1 ) );
}


//Rating stars
function init_raty() {
	$('.rating__stars').raty({
		score: function() {
	    	return $(this).attr('data-score');
		},
		path: 'images/icons/',
	    starOff : 'star-off.svg',
	    starOn  : 'star-on.svg',
	    starHalf : 'star-half.svg'
	});
}


//Color filter select
function init_ColorSelect() {
	$('.color-filter__item').on('click', function(e){
		e.preventDefault();
		$(this)[0].classList.toggle('color-filter__item--selected');
	});
}


//Swiper Slider
//team slider
function init_TeamSlider() {
	var teamSwiper = new Swiper('.team__slider',{
		loop: true,
		slidesPerView: 4,
		calculateHeight: true,
		mode: 'horizontal'
	});  

	$('.swiper-controls .prev-arrow').on('click', function(e){
        e.preventDefault();
        teamSwiper.swipePrev();
    });

    $('.swiper-controls .next-arrow').on('click', function(e){
        e.preventDefault();
        teamSwiper.swipeNext();
    });

    var displayWidth = $(window).width();

    switch (true) {
	  	case (displayWidth>1200):
	   		teamSwiper.params.slidesPerView=4;
        	teamSwiper.resizeFix();   
	   	break;
	  	case (displayWidth>970 && displayWidth<=1200):
	   		teamSwiper.params.slidesPerView=3;
         	teamSwiper.resizeFix();
	   	break;
	   	case (displayWidth>520 && displayWidth<=9700):
	   		teamSwiper.params.slidesPerView=2;
         	teamSwiper.resizeFix();
	   	break;
	   	case (displayWidth<=520):
	   		teamSwiper.params.slidesPerView=1;
         	teamSwiper.resizeFix();
	   	break;
	}

	//Resize detect
	$(window).resize(function(){
		var displayWidth = $(window).width();

		switch (true) {
		  	case (displayWidth>1200):
		   		teamSwiper.params.slidesPerView=4;
	        	teamSwiper.reInit();   
		   	break;
		  	case (displayWidth>970 && displayWidth<=1200):
		   		teamSwiper.params.slidesPerView=3;
	         	teamSwiper.reInit();
		   	break;
		   	case (displayWidth>520 && displayWidth<=9700):
		   		teamSwiper.params.slidesPerView=2;
	         	teamSwiper.reInit();
		   	break;
		   	case (displayWidth<=520):
		   		teamSwiper.params.slidesPerView=1;
	         	teamSwiper.reInit();
		   	break;
		}
	});
}


//qoutation slider
function init_QoutationSlider() {
	var qoutationSwiper = new Swiper('.qoutation-slider',{
		loop: true,
		slidesPerView: 1,
		calculateHeight: true,
		mode: 'horizontal'
	});  

	$('.qoutation-slider-controls .prev-arrow').on('click', function(e){
        e.preventDefault();
        qoutationSwiper.swipePrev();
    });

    $('.qoutation-slider-controls .next-arrow').on('click', function(e){
        e.preventDefault();
        qoutationSwiper.swipeNext();
    });
}

//decorated slider
function init_DecoratedSlider() {
	var decoratedSwiper = new Swiper('.decorated-slider',{
		loop: true,
		slidesPerView: 4,
		calculateHeight: true,
		resizeReInit: true,
		mode: 'horizontal'
	});  

	$('.decorated-slider-controls .prev-arrow').on('click', function(e){
        e.preventDefault();
        decoratedSwiper.swipePrev();
    });

    $('.decorated-slider-controls .next-arrow').on('click', function(e){
        e.preventDefault();
        decoratedSwiper.swipeNext();
    });

    var displayWidth = $(window).width();

    switch (true) {
	  	case (displayWidth>1200):
	   		decoratedSwiper.params.slidesPerView=4;
        	decoratedSwiper.resizeFix();   
	   	break;
	  	case (displayWidth>640 && displayWidth<=1200):
	   		decoratedSwiper.params.slidesPerView=3;
         	decoratedSwiper.resizeFix();
	   	break;
	   	case (displayWidth>450 && displayWidth<=640):
	   		decoratedSwiper.params.slidesPerView=2;
         	decoratedSwiper.resizeFix();
	   	break;
	   	case (displayWidth<=450):
	   		decoratedSwiper.params.slidesPerView=1;
         	decoratedSwiper.resizeFix();
	   	break;
	}

	//Resize detect
	$(window).resize(function(){
		 var displayWidth = $(window).width();

		switch (true) {
		  	case (displayWidth>1200):
		   		decoratedSwiper.params.slidesPerView=4;
	        	decoratedSwiper.reInit();  
		   	break;
		  	case (displayWidth>640 && displayWidth<=1200):
		   		decoratedSwiper.params.slidesPerView=3;
	         	decoratedSwiper.reInit();
		   	break;
		   	case (displayWidth>450 && displayWidth<=640):
		   		decoratedSwiper.params.slidesPerView=2;
	         	decoratedSwiper.reInit();
		   	break;
		   	case (displayWidth<=450):
		   		decoratedSwiper.params.slidesPerView=1;
	         	decoratedSwiper.reInit();
		   	break;
		}
	});
}

//carousel
function init_Carousel() {
	var carouselSwiper = new Swiper('.carousel',{
		loop: true,
		slidesPerView: 1,
		calculateHeight: true,
		autoplay: 5000,
		speed: 600,
		mode: 'horizontal'
	});  

	$('.carousel-controls .prev-arrow').on('click', function(e){
        e.preventDefault();
        carouselSwiper.swipePrev();
    });

    $('.carousel-controls .next-arrow').on('click', function(e){
        e.preventDefault();
        carouselSwiper.swipeNext();
    });
}
