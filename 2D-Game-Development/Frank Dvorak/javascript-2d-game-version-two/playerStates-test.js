const states = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
}

class State{
    constructor(state){
        this.state = state;
    }
}

export class Sitting extends State{
    constructor(player){
        super('SITTING');
        this.player = player;
    }
    enter(){
        this.player.frameY = 5;

    }
    handleInput(input){
        if(input.includes('ArrowLeft') || input.includes('ArrowRight')) {
            this.player.setState(states.RUNNING);
        }
        
    }
} // export class Sitting

export class Running extends State{
    constructor(player){
        super('RUNNING');
        this.player = player;
    }
    enter(){
        this.player.frameY = 3;

    }
    handleInput(input){
        if(input.includes('ArrowDown') ) {
            this.player.setState(states.SITTING);
        }
        
    }
} // export class Running

export class Jumping extends State{
    constructor(player){
        super('JUMPING');
        this.player = player;
    }
    enter(){
        if(this.player.onGround()) this.player.vy -= 30;
        this.player.frameY = 1;

    }
    // before refactoring of code to include the FALLING state
    handleInput(input){
        if(input.includes('ArrowDown') ) {
            this.player.setState(states.SITTING);
        }
        
    }
} // export class Jumping