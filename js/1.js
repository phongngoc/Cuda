$(document).ready(function() {

	new WOW().init();	

	$('html,body').scrollspy({ target: '#navbar-example' })
	$(window).scroll(function(event) {
		/* Act on the event */		
		var bodyLocation = $('html,body').scrollTop();
		if(bodyLocation>=100)
		{
			$('.menu').addClass('fixed-menu');
			$('.banner').addClass('moretop');
		}
		else if($(window).width()<991) {
			$('.menu').addClass('fixed-menu');
			$('.banner').removeClass('moretop');
		}
		else {
			$('.menu').removeClass('fixed-menu');
			$('.banner').removeClass('moretop');
		}		
	});

	var el = $('.circle'),inited = false;

	el.appear({ force_process: true });

	el.on('appear', function() {
	  if (!inited) {
	    el.circleProgress({ value: $(this).data('value') });
	    inited = true;
	  }
	});

	var progressBarOptions = {
		startAngle: -1.55,
		size: 200,
		value: 0.9,
		fill: 
		{
			color: '#30bae7'
		}
	}

		$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
			//$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
		});

		$('#circle-b').circleProgress({
			value : 0.7,
			fill: {
				color: '#d74680'
			}
		});

		$('#circle-c').circleProgress({
			value : 0.75,
			fill: {
				color: '#15c7a8'
			}
		});

		$('#circle-c').circleProgress({
			value : 0.85,
			fill: {
				color: '#eb7d4b'
			}
		});

	$('.footer .social-network a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
	});
	$('.nav-item').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});
	$('.nav-item:nth-child(1)').click(function(event) {
		$('html,body').animate({scrollTop: $('.banner').offset().top},1000,"easeInOutExpo");
	});
	$('.nav-item:nth-child(2)').click(function(event) {
		$('html,body').animate({scrollTop: $('.services').offset().top},1000,"easeInOutExpo");
	});
	$('.nav-item:nth-child(3)').click(function(event) {
		$('html,body').animate({scrollTop: $('.team').offset().top},1000,"easeInOutExpo");
	});
	$('.nav-item:nth-child(4)').click(function(event) {
		$('html,body').animate({scrollTop: $('.skill').offset().top},1000,"easeInOutExpo");
	});
	$('.nav-item:nth-child(5)').click(function(event) {
		$('html,body').animate({scrollTop: $('.portfolio').offset().top},1000,"easeInOutExpo");
	});
	$('.nav-item:nth-child(6)').click(function(event) {
		$('html,body').animate({scrollTop: $('.feedback').offset().top},1000,"easeInOutExpo");
	});
	$('.nav-item:nth-child(7)').click(function(event) {
		$('html,body').animate({scrollTop: $('.getintouch').offset().top},1000,"easeInOutExpo");
	});

	$('.portfolio .row').isotope({
		itemSelector:'.project'
	});

	$('.portfolio .filter-button .button').click(function(event) {
		/* Act on the event */
		$('.portfolio .filter-button .button').removeClass('active');
		$(this).addClass('active');
		var danhmuc = $(this).data('class');
		if(danhmuc=='all')
		{
			$('.portfolio .row').isotope({
				filter: '*'
			});
		}
		else {
			$('.portfolio .row').isotope({
				filter: '.'+danhmuc+''
			});
		}
		return false;
	});

	// Init fancyBox
	$(".ima").fancybox();
});