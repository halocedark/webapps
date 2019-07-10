$( document ).ready(function() {

// Variables 
var overlay = document.querySelector('#overlay');
var contentCaption = document.querySelector('#contentCaption');
    
// Event Handlers
adtimeOut(30);
    
// Functions
function adtimeOut(hideTime) {
    overlay.style.display = 'block';
    interval = setInterval(function() {
    hideTime--;
    contentCaption.innerHTML = 'Closing advertisement in: ' +hideTime+ ' secs...';
        contentCaption.style.opacity = '1';
        if (hideTime === 0) {
            overlay.style.display = 'none';
            clearInterval(interval);
        }
    }, 1000);   
}   


    
    
    
    
    





















});
