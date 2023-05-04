class Projectiles extends GameObject{

    constructor(x,y,width,height){
        super(x, y, width, height);
        this.speed = 10;
    }

    move(){
        this.y -= this.speed;
    }

}