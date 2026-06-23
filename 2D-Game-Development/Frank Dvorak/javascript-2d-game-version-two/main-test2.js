import { InputHandler } from "./input.js";
import { Player } from "./player.js";
import { Background } from "./background.js";

// before enemies are added
window.addEventListener('load', function(){
    /**@type {HTMLCanvasElement} */
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500; // this can be wider
    //canvas.width = 1500;
    canvas.height = 500; // keep this to match the provided assets

    class Game{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.groundMargin = 80;
            this.speed = 0;
            this.maxSpeed = 3;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input = new InputHandler();
            

        }
        update(deltaTime){
            this.background.update();
            this.player.update(this.input.keys, deltaTime);

        }
        draw(context){
            this.background.draw(context);
            this.player.draw(context);

        }
    }

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

    function animate(timeStamp){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        //console.log(deltaTime);
        lastTime = timeStamp;
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);

});