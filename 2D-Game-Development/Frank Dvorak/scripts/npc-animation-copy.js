/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 100;
const enemiesArray = [];

// const enemyImage = new Image();
// enemyImage.src = './img/enemy1.png';
let gameFrame = 0;

// factory function
//temporary object
/*enemy1 = {
    x: 10,
    y: 50,
    width: 200,
    height: 200,
}*/
//console.log(enemy1);

// this class/factory function will generate many objects for us
class Enemy {
    constructor() {
        this.image = new Image();
        this.image.src = './img/enemy1.png';
        
        
        // this.width = 100;
        // this.height = 100;
        //this.speed = Math.random() * 4 - 2; // a range from -2 to +2
        this.spriteWidth = 293
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        /// centers the sprites within the canvas
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1); // random number between 1 and 4
    }
    // shared class method
    update() {
        //this.x += this.speed;
        this.x += Math.random() * 5 - 2.5;
        this.y += Math.random() * 5 - 2.5;
        // cycle through animated sprites; also slows them down
        if(gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
        
    }
    // shared class method
    draw() {
        //ctx.strokeRect(this.x, this.y, this.width, this.height); // draw any shapes and styles, images
        //ctx.drawImage(enemyImage, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};
//const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemies; i++) {
    enemiesArray.push(new Enemy());
}
//console.log(enemiesArray);
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // enemy1.update();
    // enemy1.draw();
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    });
    gameFrame++;
    requestAnimationFrame(animate)
}
// call the animate function
animate();
//console.log(animate);
