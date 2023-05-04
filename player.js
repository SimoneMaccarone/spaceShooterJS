class Player extends GameObject {

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.speed = 10;
        this.controller = {};
        this.projectiles = [];
        this.attakCoolDown = 10;
    }

    draw(ctx) {
        super.draw(ctx);
        this.attakCoolDown--;

        // Projectiles
        this.projectiles.forEach(projectile => {
            projectile.draw(ctx);
            projectile.move();
        })
    }
    // ----- CONTROLLER -----
    controls(canvasWidth, canvasHeight) {
        // pressione Down sul tasto
        document.onkeydown = (keyEvent) => {
            // console.log('keyEventDown', keyEvent);
            this.controller[keyEvent.key] = true;
        }
        // pressione Up sul tasto
        document.onkeyup = (keyEvent) => {
            // console.log('keyEventUp', keyEvent);
            this.controller[keyEvent.key] = false;
        }
        // Controllo Movimenti 
        console.log(this.controller)
        if (this.controller.ArrowUp || this.controller.w) {
            this.y = this.y > 0 ? (this.y - this.speed) : 0;
        }
        if (this.controller.ArrowDown || this.controller.s) {
            this.y = this.y < (canvasHeight - this.height) ? (this.y + this.speed) : (canvasHeight - this.height);
        }
        if (this.controller.ArrowLeft || this.controller.a) {
            this.x = this.x > 0 ? (this.x - this.speed) : 0;
        }
        if (this.controller.ArrowRight || this.controller.d) {
            this.x = this.x < (canvasWidth - this.width) ? (this.x + this.speed) : (canvasWidth - this.width);
        }
        // Attacco base
        if (this.controller[' ']) {
            this.baseAttack();
        }
    }

    baseAttack() {
        if (this.attakCoolDown <= 0) {
            let projectile = new Projectiles(this.x + (this.width / 2), this.y, 3, 9);
            this.projectiles.push(projectile)
            this.attakCoolDown = 10;
        }
    }
}