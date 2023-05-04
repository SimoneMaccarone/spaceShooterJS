// CANVAS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

// ANIMATION
let animate;

let go = new GameObject(canvasWidth / 2, canvasHeight / 2, 50, 50);






// ANIMATION
function animator() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    animate = requestAnimationFrame(animator);
    go.draw(ctx);
}
animator()


