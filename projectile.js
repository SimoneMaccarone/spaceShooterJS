class Projectiles extends GameObject {

    constructor(x, y, width, height, color = 'yellow',imgUrl) {
        super(x, y, width, height, color,imgUrl);
        this.speed = 10;
    }

    move() {
        this.y -= this.speed;
    }

    collision(){
        
    }

}