// this file lays out the foundation for building ONE sprite
document.addEventListener('DOMContentLoaded', function () {
	// change addEventListener to 'load' if going live
	/**@type {HTMLCanvasElement} */
	const canvas = document.getElementById('canvas1');
	const ctx = canvas.getContext('2d');
	canvas.width = 500;
	canvas.height = 800;

	class Game {
		constructor(ctx, width, height) {
            // convert global variables into class properties so they can be used when required
            this.ctx = ctx;
            this.width = width;
            this.height = height;

            // declare an enemies array
            this.enemies = [];
            
            // call the #addNewEnemy to push a new enemy into the enemies array
            this.#addNewEnemy();
            console.log(this.enemies); // outputs a single enemy object in the array
			
		}
		update() {
            // cycle through enemies array			
			this.enemies.forEach((object) => object.update());
		}
        // call the draw() method from the Enemy class and cycle through the enemies array
		draw() {
			this.enemies.forEach((object) => object.draw());
		}
        //private class - can only be used with Game class
		#addNewEnemy(){
            // push an ememy object to the end of the array
            this.enemies.push(new Enemy(this));
        }
	}

	class Enemy {
        // creates ONE enemy object
		constructor(game) {
            this.game = game;
            console.log(this.game);
            this.x = this.game.width;
            this.y = Math.random() * this.game.height;
            this.width = 100;
            this.height = 100;
			
		}
		update(deltaTime) {
            this.x--; //move to the left
			
		}
		draw() {
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}


	const game = new Game(ctx, canvas.width, canvas.height);
    let lastTime = 1;
	function animate(timeStamp) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// this ensures a consistent performance on any (if not all) computers
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        //console.log(deltaTime); //outputs 16.6
		game.update();
        game.draw();
		requestAnimationFrame(animate);
	}
	animate(0); // 0 takes care of the initial looping
});
