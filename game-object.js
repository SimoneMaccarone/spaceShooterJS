class GameObject {

    constructor(x, y, width, height, color = 'black', imgUrl) {
        this.isAlive=true;

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        if (imgUrl) {
            this.img = new Image();
            this.img.onload = () => {
                this.hasImg = true;
            }
            this.img.src = imgUrl;
        }
    }

    draw(ctx) {
        if (this.hasImg) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    isColliding(other) {

        const isCollidingX = other.x < (this.x + this.width) && (other.x + other.width) > this.x;
        const isCollidingY = other.y < (this.y + this.height) && (other.y + other.hasImg) > this.y;
        if (isCollidingX && isCollidingY){
            return true;
        }else{
            return false
        }


        if (enemy.x < (pA.x + pA.width) &&
            (enemy.x + enemy.width) > pA.x &&
            enemy.y < pA.y + pA.height &&
            (enemy.y + enemy.height) > pA.y) {
            enemy.healthPoints--;
            console.log("enemy", enemy);
        }
    }
}
