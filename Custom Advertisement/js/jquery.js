$(document).ready(function() {

	// Slider Starts
	var width = 720;
	var animationSpeed = 2000;
	var time = 5000;
	var slides = $('.slides');
	var slide = $('.slide');
	var slideCount = 1;
	var interval;
	function startSlider() {
			interval = setInterval(function() {
					slides.animate({ 'margin-left': '-='+width }, animationSpeed);
					slideCount++;
					
					if (slideCount === $('.slide').length) {
						slideCount = 1;
						slides.delay(2000).animate({'margin-left': 0});
					}
		
				}, time);
		}
		startSlider();
		$('#slider').on('mouseenter', function() {
			clearInterval(interval);
		}).on('mouseleave', function() {
			startSlider();
		});


	$('.right-arrow').on('click', function() {
		$(this).hide(1000).fadeIn(1000);
		slides.animate({ 'margin-left': '-='+width }, 1000);
		slideCount++;
		console.log(slideCount);
		if (slideCount === slide.length) {
			slideCount = 1;
			slides.delay(3000).animate({'margin-left': 0});
		}
	});

	$('.left-arrow').on('click', function() {
		$(this).fadeOut(1000).show(1000);
		if (slideCount > 1) {
			slideCount--;
			slides.animate({'margin-left': '+='+width},1000);
		}
		
	});

	// Slider Ends

	
});