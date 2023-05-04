class Player extends GameObject {

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.speed = 10;
        this.controller = {};
        this.projectiles = [];
    }

    draw(ctx) {
        super.draw(ctx);
    }
// ----- CONTROLLER -----
    controls() {
        // pressione Down sul tasto
        document.onkeydown = (keyEvent) => {
            console.log('keyEventDown', keyEvent);
            this.controller[keyEvent.key]=true;

        }
        // pressione Up sul tasto
        document.onkeyup = (keyEvent) => {
            console.log('keyEventUp', keyEvent);
            this.controller[keyEvent.key]=false+;
        }
        

        // document.onkeydown = (keyEvent) => { 
        //     console.log('keyEvent', keyEvent);

        //     if(keyEvent.key === 'ArrowUp' || keyEvent.key === 'w'){
        //         this.y-= this.speed;
        //     }
        //     if(keyEvent.key === 'ArrowDown'|| keyEvent.key === 's'){
        //         this.y+=this.speed;
        //     }
        //     if(keyEvent.key === 'ArrowLeft'|| keyEvent.key === 'a'){
        //         this.x-=this.speed;
        //     }
        //     if(keyEvent.key === 'ArrowRight'|| keyEvent.key === 'd'){
        //         this.x+=this.speed;
        //     }
        // }



    }


}