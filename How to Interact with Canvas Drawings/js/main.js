$( document ).ready(function() {

function _(element) {
    var element = document.querySelector(element);
    return element;
}

// Variables 
var canvas = _('#canvas');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
var ctx    = canvas.getContext('2d'); 
var mouse  = {
    x       : undefined,
    y       : undefined  
};
var maxRadius   = 40;
var minRadius   = 1;
var colorArray  = [
    '#FCFFF5', '#D1DBBD', '#91AA9D', '#3E606F', '#193441', 
    '#133046', '#15959F', '#F1E4B3', '#F4A090', '#F26144', 
    '#2B3A42', '#3F5866', '#BDD3DE', '#F0F0DF', '#FF8F00'
];

// Event Handlers
canvas.addEventListener('mousemove', function(e) {
    mouse.x     = e.x;
    mouse.y     = e.y;
});
window.addEventListener('resize', function(e) {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

// Functions
var circleArray = [];
function init() {
    circleArray = [];
    for ( i = 0; i < 300; i++ ) {
        var radius     = Math.random() * minRadius;
        var x          = Math.random() * (canvas.width - radius * 2)  + radius;
        var y          = Math.random() * (canvas.height - radius * 2) + radius;
        var dx         = (Math.random() - 0.8);
        var dy         = (Math.random() - 0.8);
        circleArray.push(new Circle(x, y, radius, dx, dy));
    }
}
init();


function Circle( x, y, radius, dx, dy ) {
    this.x      = x;
    this.y      = y;
    this.dx     = dx;
    this.dy     = dy;
    this.radius = radius;
    this.color  = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle   = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 7, false);
        ctx.fill();
    }
    this.update = function() {
        if ( this.x + this.radius > canvas.width || this.x - this.radius < 0 ) {
            this.dx = -this.dx;
        }
        if ( this.y + this.radius > canvas.height || this.y - this.radius < 0 ) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        
        // Mouse interactivity
        if ( mouse.x - this.x < 50 && mouse.x - this.x > -50 && 
             mouse.y - this.y < 50 && mouse.y - this.y > -50 )           
        {
            if ( this.radius < maxRadius ) {
                this.radius += 1;
            }
        } else if ( this.radius > minRadius )
        {
            this.radius -= 1;
        }
        
        this.draw();
    }
    
}
  

function animate() {    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    requestAnimationFrame(animate); 
    for ( i = 0; i < circleArray.length; i++ ) {
        circleArray[i].update();
    }
}
animate();
    
    
    
    
    
    
    
    
    
    
    
 

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    





});