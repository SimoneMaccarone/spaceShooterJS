// CANVAS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

// ANIMATION
let animate; animator()

let player = new Player(canvasWidth / 2 - 25, canvasHeight / 2 - 25, 50, 50);

let enemySpawnCoolDown = 120;
let allEnemies = [];



// ANIMATION
function animator() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    animate = requestAnimationFrame(animator);

    player.draw(ctx);
    player.controls(canvasWidth, canvasHeight);

    enemySpawnCoolDown--;
    if()
    enemySpawn();
    enemySpawnCoolDown = 120;


    allEnemies.forEach(enemy => {
        enemy.draw(ctx);
        enemy.move();

    })
}

function enemySpawn() {
    const randomX = Math.random() * (canvasWidth - 50)
    let enemy = new BaseEnemy(randomX, -60, 50, 50);
    allEnemies.push(enemy);
}


