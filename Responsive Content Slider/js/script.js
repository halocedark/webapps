$( document ).ready(function() {

// Variables 
var firstSlide    = $('.slide').first();
var lastSlide     = $('.slide').last();
var leftArrow     = $('.arrow-left');
var rightArrow    = $('.arrow-right');


  
// Event Handlers
leftArrow.on('click',goToPreviousSlide);
rightArrow.on('click',goToNextSlide);

// Functions
function goToNextSlide() {
    var currentSlide = $('.slide.active');
    var nextSlide    = currentSlide.next();
    currentSlide.fadeOut(500).removeClass('active').next().fadeIn(500).addClass('active');
    if ( nextSlide.length === 0 ) {
        firstSlide.fadeIn(500).addClass('active');
    }
}
function goToPreviousSlide() {
    var currentSlide = $('.slide.active');
    var prevSlide    = currentSlide.prev();
    currentSlide.fadeOut(500).removeClass('active').prev().fadeIn(500).addClass('active');
    if ( prevSlide.length === 0 ) {
        lastSlide.fadeIn(500).addClass('active');
    }
}


















});
