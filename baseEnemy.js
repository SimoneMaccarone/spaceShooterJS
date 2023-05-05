class BaseEnemy extends GameObject {
    constructor(x, y, width, height, color = 'red',imgUrl) {
        super(x, y, width, height, color,imgUrl)
        this.speed = 3;
        this.healthPoints = 1;
    }

    move() {
        this.y += this.speed;
    }

}