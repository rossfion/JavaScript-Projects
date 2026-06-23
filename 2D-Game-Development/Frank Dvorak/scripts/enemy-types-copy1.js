//this file focuses on displaying enemies before they are deleted 
document.addEventListener('DOMContentLoaded', function () {
	/**@type {HTMLCanvasElement} */
	const canvas = document.getElementById('canvas1');
	const ctx = canvas.getContext('2d');
	canvas.width = 500;
	canvas.height = 800;

	class Game {
		constructor(ctx, width, height) {
            this.ctx = ctx;
            this.width = width;
            this.height = height;
            this.enemies = [];
			this.enemyInterval = 1000; // time in milliseconds
			this.enemyTimer = 0;            		
		}
		update(deltaTime) {
			if(this.enemyTimer > this.enemyInterval){
				this.#addNewEnemy();
				this.enemyTimer = 0; // reset
				console.log(this.enemies); 	
			} else {
				this.enemyTimer += deltaTime;
			}
			this.enemies.forEach((object) => object.update());
		}
		draw() {
			this.enemies.forEach((object) => object.draw(this.ctx));
		}
		#addNewEnemy(){
            this.enemies.push(new Enemy(this));
        }
	}

	class Enemy {
		constructor(game) {
            this.game = game;
            console.log(this.game);
            this.x = this.game.width;
            this.y = Math.random() * this.game.height;
            this.width = 100;
            this.height = 100;
			
		}
		update(deltaTime) {
            this.x--; 
			
		}
		draw(ctx) {
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}


	const game = new Game(ctx, canvas.width, canvas.height);
    let lastTime = 1;
	function animate(timeStamp) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        //console.log(deltaTime); //outputs 16.6
		game.update(deltaTime);
        game.draw();
		requestAnimationFrame(animate);
	}
	animate(0); // 0 takes care of the initial looping
});
