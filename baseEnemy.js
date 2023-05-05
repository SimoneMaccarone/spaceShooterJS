class BaseEnemy extends GameObject {
    constructor(x, y, width, height, color = 'red',imgUrl) {
        super(x, y, width, height, color,imgUrl)
        this.speed = 5;
        this.healthPoints = 3;
    }

    move() {
        this.y += this.speed;
    }

    collision(){
        this.healthPoints--;
        if (this.healthPoints <= 0) {
            this.isAlive = false;
        }
    }

}