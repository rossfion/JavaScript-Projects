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
			this.enemyInterval = 500; 
			this.enemyTimer = 0; 
			this.enemyTypes = ['worm', 'ghost', 'spider'];           		
		}
		update(deltaTime) {
			this.enemies = this.enemies.filter((object) => !object.markedForDeletion);
			if(this.enemyTimer > this.enemyInterval){
				this.#addNewEnemy();
				this.enemyTimer = 0; // reset
				console.log(this.enemies); 	
			} else {
				this.enemyTimer += deltaTime;
			}
			this.enemies.forEach((object) => object.update(deltaTime));
		}
		draw() {
			this.enemies.forEach((object) => object.draw(this.ctx));
		}
		#addNewEnemy(){
			const randomEnemy = this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
            if (randomEnemy == 'worm'){
				this.enemies.push(new Worm(this));
			} else if (randomEnemy == 'ghost'){
				this.enemies.push(new Ghost(this));
			} else if (randomEnemy == 'spider'){
				this.enemies.push(new Spider(this));
			} 
			/*this.enemies.sort(function(a,b){
				return a.y - b.y;
			});*/
        }
	}

	// parent class
	class Enemy {
		constructor(game) {
            this.game = game;
            //console.log(this.game);
			this.markedForDeletion = false;
			this.frameX;
			this.maxFrame = 5; // number of sprites (6) from 0 to 5
			this.frameInterval = 100;
			this.frameTimer = 0;			
		}
		update(deltaTime) {
            this.x -= this.vx * deltaTime; 
			// remove enemies
			if(this.x < 0 - this.width){
				this.markedForDeletion = true;
			} 
			if(this.frameTimer > this.frameInterval){
				if(this.frameX < this.maxFrame){
					this.frameX++;
				} else {
					this.frameX = 0;
					this.frameTimer = 0;
				}
			} else {
				this.frameTimer += deltaTime;
			}
		}
		// I had set the spriteWidth to SpriteHeight (see also copy3) by accident as a result of the autocomplete, so images appeared to be chopped off!!!
		draw(ctx) {
			ctx.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
		}
	}

	// child class
	class Worm extends Enemy{
		constructor(game){
			super(game);
			this.spriteWidth = 229; // width of the sprite sheet / number of sprites
			this.spriteHeight = 171; // height of the sprite sheet
			// the same issue here with the autocomplete - see above comment
			this.width = this.spriteWidth/2; // to preserve aspect ratio
            this.height = this.spriteHeight/2; // to preserve aspect ratio
			this.x = this.game.width;
            this.y = this.game.height - this.height;  // this moves the worms to the bottom of the canvas ('ground')          
			this.image = worm;
			this.vx = Math.random() * 0.1 + 0.1;
			/* this outputs the HTML reference to the img tag with its ID and other attributes. It appears to be a way of saying this.image = document.getElementById = ('worm')*/
			//console.log(this.image);
	
		}
	}

	// child class
	class Ghost extends Enemy{
		constructor(game){
			super(game);
			this.spriteWidth = 261; 
			this.spriteHeight = 209; 
			// the same issue here with the autocomplete - see above comment
			this.width = this.spriteWidth/2; 
            this.height = this.spriteHeight/2; 
			this.x = this.game.width;
            this.y = Math.random() * this.game.height * 0.6;            
			this.image = ghost;
			this.vx = Math.random() * 0.2 + 0.1;
			this.angle = 0;	
			this.curve = Math.random() * 3;
		}
		// make ghosts move in wavy pattern
		update(deltaTime){
			super.update(deltaTime);
			this.y += Math.sin(this.angle) * this.curve;
			this.angle += 0.04;
		}
		draw(ctx){
			/* Method one for making ghosts transparent ctx.globalAlpha = 0.5; // this also applies to the worms
			super.draw(ctx);
			ctx.globalAlpha = 1; // one way to ensure only the ghosts are transparent */

			// Method two
			ctx.save();
			ctx.globalAlpha = 0.7; // percent
			super.draw(ctx); // Enemy.draw()
			ctx.restore();
		}
	}

	// child class
	class Spider extends Enemy{
		constructor(game){
			super(game);
			this.spriteWidth = 310; 
			this.spriteHeight = 175; 
			// the same issue here with the autocomplete - see above comment
			this.width = this.spriteWidth/2; 
            this.height = this.spriteHeight/2; 
			this.x = Math.random() * this.game.width;
            this.y = 0 - this.height; 
			this.image = spider;
			// we want spiders to only move up and down
			this.vx = 0;
			this.vy = Math.random() * 0.1 + 0.1;
			this.maxLength = Math.random() * this.game.height;
		}
		update(deltaTime){
			super.update(deltaTime);
			if(this.y < 0 - this.height * 2){
				this.markedForDeletion = true;
			} 
			this.y += this.vy * deltaTime;
			if(this.y > this.maxLength){
				this.vy *= -1;				
			} 

		}
		// to have spiders descending on a line ('thread')
		draw(ctx){
			ctx.beginPath();
			ctx.moveTo(this.x + this.width/2, 0);
			ctx.lineTo(this.x + this.width/2, this.y + 10);
			ctx.stroke();
			super.draw(ctx);
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
        game.draw(ctx);
		requestAnimationFrame(animate);
	}
	animate(0); // 0 takes care of the initial looping
});
