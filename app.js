// CANVAS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

// ANIMATION
let animate;
function animator(){
    animate= requestAnimationFrame(animator);
}
animator()