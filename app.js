// CANVAS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let animate;

// PLAYER
let player = new Player(canvasWidth / 2 - 25, canvasHeight / 2 - 25, 50, 50,'purple','./assets/sgarbi-1.jpg ');

let enemySpawnCoolDown = 120;
let allEnemies = [];



// ANIMATION
function animator() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    animate = requestAnimationFrame(animator);

    player.draw(ctx);
    player.controls(canvasWidth, canvasHeight);

    // Enemy Spawn
    enemySpawnCoolDown--;
    if (enemySpawnCoolDown <= 0) {
        enemySpawn();
        enemySpawnCoolDown = 120;
    }

    allEnemies.forEach(enemy => {
        enemy.draw(ctx);
        enemy.move();

        checkCollision()
        allEnemies = allEnemies.filter(enemy => enemy.healthPoints > 0)
    })
}
// ENEMY SPAWN
function enemySpawn() {
    const randomX = Math.random() * (canvasWidth - 50)
    let enemy = new BaseEnemy(randomX, -60, 100, 100,null,'./assets/salvinik.png');
    allEnemies.push(enemy);
}
// COLLISION
function checkCollision() {
    let playerAssets = [player, ...player.projectiles]
    for (let i = 0; i < playerAssets.length; i++) {
        const pA = playerAssets[i];
        for (let j = 0; j < allEnemies.length; j++) {
            const enemy = allEnemies[j];
            if (enemy.x < (pA.x + pA.x) && (enemy.x + enemy.width) > (pA.x && enemy.y) < (pA.y + pA.height) && (enemy.y + enemy.height) > pA.y) {
                enemy.healthPoints--;
                console.log('enemy', enemy);
            }
        }
    }
    // function loopBackground(){
    // }

}

animator()
