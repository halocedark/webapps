$( document ).ready(function() {

function _(element) {
    var element = document.querySelector(element);
    return element;
}

// Variables 
var canvas          = _('#canvas');
var ctx             = canvas.getContext('2d');
var mouse = {
  x : undefined,
  y : undefined
};
var hold = false;

// Setup
function setup() {
    canvas.width        = window.innerWidth;
    canvas.height       = 600;
}

// Event Handlers
window.addEventListener('resize', setup);
canvas.addEventListener('mousedown', mouseHold);
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mouseup', mouseRelease);

    
// Objects
function Rect(x = 10, y = 10, w = 50, h = 50, color = '#000') {
    this.x           = x;
    this.y           = y;
    this.w           = w;
    this.h           = h;
    this.color       = color;
    this.draw    = function(type = 'fill') {
        if (type === 'stroke') {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.strokeRect(this.x, this.y, this.w, this.h);
        } else {
            ctx.beginPath();           
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }       
    }
}

function Line(xOld = 40, yOld = 40, xNew = 100, yNew = 100, color = '#000') {
    this.xOld               = xOld;
    this.yOld               = yOld;
    this.xNew               = xNew;
    this.yNew               = yNew;              
    this.color              = color;
    this.line = {
        width  : undefined,
        cap    : undefined,
        join   : undefined
    };
    this.draw    = function(type = 'stroke') {
        if (type === 'stroke') {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth   = this.line.width;
            ctx.lineCap     = this.line.cap;
            ctx.lineJoin    = this.line.join;
            ctx.moveTo(this.xOld, this.yOld);
            ctx.lineTo(this.xNew, this.yNew);
            ctx.lineTo(200, 100);
            ctx.stroke(); 
        } else if (type === 'fill') {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.lineWidth   = this.width;
            ctx.moveTo(this.xOld, this.yOld);
            ctx.lineTo(this.xNew, this.yNew);
            ctx.lineTo(200, 100);
            ctx.fill();
        } else {
            console.log('Error: This [' +type+ '] is not a valid function argument!');
        }  
    }
}
    
function Arc(x = 10, y = 10, r = 5, s = 0, f = (Math.PI * 2), color = '#ffaa80') {
    this.x                = x;
    this.y                = y;
    this.radius           = r;
    this.start            = s;
    this.finish           = f;
    this.color            = color;
    this.shadow = {
        color       : undefined,
        blur        : undefined,
        offsetX     : 1,
        offsetY     : 1,
    };
    this.draw    = function(type = 'fill') {
        if (type === 'stroke') {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.shadowColor = this.shadow.color;
            ctx.shadowOffsetX = this.shadow.offsetX;
            ctx.shadowOffsetY = this.shadow.offsetY;
            ctx.shadowBlur = this.shadow.blur;
            ctx.arc(this.x, this.y, this.radius, this.start, this.finish, false);
            ctx.stroke();
            ctx.closePath();
        } else if (type === 'fill') {
            ctx.beginPath();           
            ctx.fillStyle = this.color;
            ctx.shadowColor = this.shadow.color;
            ctx.shadowOffsetX = this.shadow.offsetX;
            ctx.shadowOffsetY = this.shadow.offsetY;
            ctx.shadowBlur = this.shadow.blur;
            ctx.arc(this.x, this.y, this.radius, this.start, this.finish, false);
            ctx.fill();
            ctx.closePath();
        } else {
            console.log('Error: This [' +type+ '] is not a valid function argument!');
        }      
    }
}
    
// Functions
function mouseHold(e) {
    hold = true;
    mouse.x     = e.clientX;
    mouse.y     = e.clientY;
    point.x     = mouse.x;
    point.y     = mouse.y;
    point.color = randomColor();
    point.radius = 20;
    point.draw();
} 
function mouseMove(e) {
    if (hold) {
        ctx.strokeStyle = point.color;
        ctx.lineWidth   = point.radius * 2;
        ctx.lineJoin    = 'round';
        ctx.lineCap     = 'round';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        mouse.x      = e.clientX;
        mouse.y      = e.clientY;
        point.x      = mouse.x;
        point.y      = mouse.y;
        point.draw();
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y); 
    }
}
function mouseRelease() {
    hold = false;
    ctx.beginPath();
}
var colors = [];
function randomColor(colors) {
    colors = [
        '#ffaa80', '#ff66b3', '#d580ff', '#3333ff', '#66ffff', 
        '#99ff99', '#ffdf80', 'ff6633', '#c68c53' , '#99ff33',
        '#000000'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}
function randomSize(size) {
    return Math.random() * size;
}

let point  = new Arc();
function animate() {
    requestAnimationFrame(animate);
    mouseMove();
}

  
// Call functions
setup();
//animate();

    
    
    
    
    
    
    
    
    
    
    
 

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    





});