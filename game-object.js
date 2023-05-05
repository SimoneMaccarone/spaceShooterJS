class GameObject {

    constructor(x, y, width, height, color = 'black', imgUrl) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        if (imgUrl) {
            this.img= new Image();
            this.img.onload = () =>{
                this.hasImg= true;
            }
            this.img.src = imgUrl; 
        }
    }

    draw(ctx) {
        if (this.hasImg) {
            ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}
