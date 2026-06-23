import { InputHandler } from "./input.js";
import { Player } from "./player.js";
import { Background } from "./background.js";
import { FlyingEnemy, ClimbingEnemy, GroundEnemy } from "./enemies.js";
import { UI } from "./UI.js";

window.addEventListener('load', function () {
    /**@type {HTMLCanvasElement} */
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 900; // this can be wider
    //canvas.width = 1500;
    canvas.height = 500; // keep this to match the provided assets

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.groundMargin = 50;
            this.speed = 0;
            this.maxSpeed = 3;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.UI = new UI(this);
            this.enemies = [];
            this.particles = [];
            this.collisions = [];
			this.floatingMessages = [];
            this.maxParticles = 50;
            this.enemyTimer = 0;
            this.enemyInterval = 1000;
            this.debug = false;
            this.score = 0;
			this.winningScore = 40
            this.fontColor = 'black';
            this.time = 0;
            this.maxTime = 30000;
            this.gameOver = false;
			this.lives = 5;
            this.player.currentState = this.player.states[0];
            this.player.currentState.enter();
            


        }
        update(deltaTime) {
            this.time += deltaTime;
            if(this.time > this.maxTime) this.gameOver = true;
            this.background.update();
            this.player.update(this.input.keys, deltaTime);
            // handle enemies
            if (this.enemyTimer > this.enemyInterval) {
                this.addEnemy();
                this.enemyTimer = 0;
            } else {
                this.enemyTimer += deltaTime;
            }
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);
                //if (enemy.markedForDeletion) this.enemies.splice(this.enemies.indexOf(this.enemy), 1); // shaking issue - replaced with the filter() method as below
            });
			// handle messages
			this.floatingMessages.forEach(message => {
                message.update();
            });
            // handles particles
            this.particles.forEach((particle, index) => {
                particle.update();
                //if(particle.markedForDeletion) this.particles.splice(index, 1); // replaced with the filter() method as below

            });
            //console.log(this.particles);
            if(this.particles.length > this.maxParticles){
                this.particles.length = this.maxParticles;
            }
            //console.log(this.particles);

            this.collisions.forEach((collision, index) => {
                collision.update(deltaTime)
                //if(collision.markedForDeletion) this.collisions.splice(index, 1); //replaced with the filter() method as below
            });
			// filtering enemies resolves the shaking issue
			this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
			
			this.particles = this.particles.filter(particle => !particle.markedForDeletion);
			
			this.collisions = this.collisions.filter(collision => !collision.markedForDeletion);			
			
			this.floatingMessages = this.floatingMessages.filter(message => !message.markedForDeletion);

        }
        draw(context) {
            this.background.draw(context);
            this.player.draw(context);
            this.enemies.forEach(enemy => {
                enemy.draw(context);
            });
            this.particles.forEach(particle => {
                particle.draw(context);

            });
            this.collisions.forEach(collision => {
                collision.draw(context);

            });
			this.floatingMessages.forEach(message => {
                message.draw(context);
            });
            this.UI.draw(context);

        }
        addEnemy() {
            if (this.speed > 0 && Math.random() < 0.5) this.enemies.push(new GroundEnemy(this));
            else if (this.speed > 0) this.enemies.push(new ClimbingEnemy(this));
            this.enemies.push(new FlyingEnemy(this));
            //console.log(this.enemies, this.particles, this.collisions, this.floatingMessages); 

        }
    }

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

    function animate(timeStamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        //console.log(deltaTime);
        lastTime = timeStamp;
        game.update(deltaTime);
        game.draw(ctx);
        if(!game.gameOver) requestAnimationFrame(animate);
    }
    animate(0);

});