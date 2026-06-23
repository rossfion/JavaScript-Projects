const grid = document.querySelector('.grid');
const resultsDisplay = document.querySelector('.results');
let currentShooterIndex = 202;
const width = 15;
const aliensRemoved = [];
let isGoingRight = true;
let direction = 1;
let invadersId;
let results = 0;


// created immediately after initializting the grid const
/*for (let i = 0; i < 225; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
    //console.log(grid);
}*/
for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div');
    grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('.grid div'));
//console.log(squares);
const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];

function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if(!aliensRemoved.includes(i)){
            squares[alienInvaders[i]].classList.add('invader');
        }
        
    }
}
draw();

squares[currentShooterIndex].classList.add('shooter');

function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invader');
    }
}

function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter');
    switch (e.key) {
        case 'ArrowLeft':
            if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
            break;
        case 'ArrowRight':
            if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
            break;
    } // end switch
    squares[currentShooterIndex].classList.add('shooter');
} // end function moveShooter(e)

document.addEventListener('keydown', moveShooter);

function moveInvaders(){
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width ==- width - 1;
    remove();

    if(rightEdge && isGoingRight){
        for(let i = 0; i < alienInvaders.length; i++){
            alienInvaders[i] += width + 1; // move them down
            direction = -1;
            isGoingRight = false;
        }
    }

    if(leftEdge && !isGoingRight){
        for(let i = 0; i < alienInvaders.length; i++){
            alienInvaders[i] += width - 1; // move them down
            direction = 1;
            isGoingRight = true;
        }
    }
    for (let i = 0; i < alienInvaders.length; i++){
        //alienInvaders[i] += 1; they move in a single direction more or less together - addting direction fixes this
        alienInvaders[i] += direction;
    }

    draw();

    if(squares[currentShooterIndex].classList.contains('invader')){
        //console.log('game over');
        resultsDisplay.innerHTML = 'GAME OVER';
        clearInterval(invadersId);
    }

    if(aliensRemoved.length === alienInvaders.length){
        resultsDisplay.innerHTML = 'YOU WIN';
        clearInterval(invadersId);
    }

}
invadersId =  setInterval(moveInvaders, 600)

function shoot(e){
    let laserId;
    let currentLaserIndex = currentShooterIndex;

    function moveLaser(){
        squares[currentLaserIndex].classList.remove('laser');
        currentLaserIndex -= width;
        squares[currentLaserIndex].classList.add('laser');

        // in the event of a collision
        if(squares[currentLaserIndex].classList.contains('invader')){
            squares[currentLaserIndex].classList.remove('laser');
            squares[currentLaserIndex].classList.remove('invader');
            squares[currentLaserIndex].classList.add('boom');

            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300);
            clearInterval(laserId);

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
            aliensRemoved.push(alienRemoved);
            //console.log(aliensRemoved)
            results++;
            resultsDisplay.innerHTML = results;
        }

    } 
    if(e.key === 'ArrowUp'){
        laserId = setInterval(moveLaser, 100);
    }
}
document.addEventListener('keydown', shoot);