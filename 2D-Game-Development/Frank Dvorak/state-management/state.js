
// State Design Pattern
//enum
export const states = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    SITTING_LEFT: 2,
    SITTING_RIGHT: 3,
    RUNNING_LEFT: 4,
    RUNNING_RIGHT: 5,
    JUMPING_LEFT: 6,
    JUMPING_RIGHT: 7,
    FALLING_LEFT: 8,
	FALLING_RIGHT: 9,
};
class State {
    constructor(state) {
        this.state = state
    }
}// end class State

export class StandingLeft extends State {
    constructor(player) {
        super('STANDING LEFT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 1;
        this.player.speed = 0;
        this.player.maxFrame = 6;

    }
    handleInput(input) {
        if (input === 'PRESS right') {
            // set state to RunningRight
            this.player.setState(states.RUNNING_RIGHT);
        } else if (input === 'PRESS left') {
            // set state to RunningLeft
            this.player.setState(states.RUNNING_LEFT);
        } else if (input === 'PRESS down') {
            // set state to StandingRight
            this.player.setState(states.SITTING_LEFT);
        } else if (input === 'PRESS up') {
            // set state to JumpingLeft
            this.player.setState(states.JUMPING_LEFT);
        }

    }
} // end class StandingLeft

export class StandingRight extends State {
    constructor(player) {
        super('STANDING RIGHT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 0;
        this.player.speed = 0;
        this.player.maxFrame = 6;

    }
    handleInput(input) {
        if (input === 'PRESS left') {
            // set state to StandingLeft
            this.player.setState(states.STANDING_LEFT);
        } else if (input === 'PRESS right') {
            // set state to RunningRight
            this.player.setState(states.RUNNING_RIGHT);
        } else if (input === 'PRESS down') {
            // set state to SittingRight
            this.player.setState(states.SITTING_RIGHT);
        } else if (input === 'PRESS up') {
            // set state to JumpingLeft
            this.player.setState(states.JUMPING_RIGHT);
        }

    }
} // end class StandingRight

export class SittingLeft extends State {
    constructor(player) {
        super('SITTING LEFT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 9;
        this.player.speed = 0;
        this.player.maxFrame = 4;

    }
    handleInput(input) {
        if (input === 'PRESS right') {
            // set state to SittingRight
            this.player.setState(states.SITTING_RIGHT);
        } else if (input === 'PRESS up') {
            // set state to StandingLeft
            this.player.setState(states.STANDING_LEFT);
        } else if (input === 'RELEASE down') {
            // set state to StandingLeft
            this.player.setState(states.STANDING_LEFT);
        }
    }
} // end class SittingLeft

export class SittingRight extends State {
    constructor(player) {
        super('SITTING RIGHT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 8;
        this.player.speed = 0;
        this.player.maxFrame = 4;

    }
    handleInput(input) {
        if (input === 'PRESS left') {
            // set state to SittingLeft
            this.player.setState(states.SITTING_LEFT);

        } else if (input === 'PRESS up') {
            // set state to StandingRight
            this.player.setState(states.STANDING_RIGHT);
        } else if (input === 'RELEASE down') {
            // set state to StandingRight
            this.player.setState(states.STANDING_RIGHT);
        }

    }
} // end class SittingRight

export class RunningLeft extends State {
    constructor(player) {
        super('RUNNING LEFT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 7;
        this.player.speed = -this.player.maxSpeed; // moving left
        this.player.maxFrame = 8;

    }
    handleInput(input) {
        if (input === 'PRESS right') {
            // set state to RunningRight
            this.player.setState(states.RUNNING_RIGHT);
        } else if (input === 'RELEASE left') {
            // set state to StandingLeft
            this.player.setState(states.STANDING_LEFT);
        } else if (input === 'PRESS down') {
            // set state to SittingLeft
            this.player.setState(states.SITTING_LEFT);
        }

    }
} // end class RunningRight

export class RunningRight extends State {
    constructor(player) {
        super('RUNNING RIGHT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 6;
        this.player.speed = this.player.maxSpeed;
        this.player.maxFrame = 8;

    }
    handleInput(input) {
        if (input === 'PRESS left') {
            // set state to RunningLeft
            this.player.setState(states.RUNNING_LEFT);
        } else if (input === 'RELEASE right') {
            // set state to StandingRight
            this.player.setState(states.STANDING_RIGHT);
        } else if (input === 'PRESS down') {
            // set state to SittingRight
            this.player.setState(states.SITTING_RIGHT);
        }

    }
} // end class RunningRight

export class JumpingLeft extends State {
    constructor(player) {
        super('JUMPING LEFT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 3;
        if(this.player.onGround()){
            this.player.vy -= 20;
        }
        this.player.speed = -this.player.maxSpeed * 0.5;
        this.player.maxFrame = 6;

    }
    handleInput(input) {
        if (input === 'PRESS right') {
            // set state to JumpingRight
            this.player.setState(states.JUMPING_RIGHT);
        } else if (this.player.onGround()) {
            // set state to StandingLeft
            this.player.setState(states.STANDING_LEFT);
        } else if (this.player.vy > 0) {
            // set state to FallingLeft
            this.player.setState(states.FALLING_LEFT);
        }
    }
} // end class JumpingLeft

export class JumpingRight extends State {
    constructor(player) {
        super('JUMPING RIGHT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 2;
        if(this.player.onGround()){
            this.player.vy -= 20;
        }
        this.player.speed = this.player.maxSpeed * 0.5;
        this.player.maxFrame = 6;

    }
    handleInput(input) {
        if (input === 'PRESS left') {
            // set state to JumpingLeft
            this.player.setState(states.JUMPING_LEFT);
        } else if (this.player.onGround()) {
            // set state to StandingRight
            this.player.setState(states.STANDING_RIGHT);
        } else if (this.player.vy < 0) {
            // set state to FallingRight
            this.player.setState(states.FALLING_RIGHT);
        }

    }
} // end class JumpingRight

export class FallingLeft extends State {
    constructor(player) {
        super('FALLING LEFT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 5;
        this.player.maxFrame = 6;

    }
    handleInput(input) {
        if (input === 'PRESS right') {
            // set state to FallingRight
            this.player.setState(states.FALLING_RIGHT);
        } else if (this.player.onGround()) {
            // set state to StandingLeft
            this.player.setState(states.STANDING_LEFT);
        }
    }
} // end class JumpingLeft

export class FallingRight extends State {
    constructor(player) {
        super('FALLING RIGHT');
        this.player = player;
    }
    enter() {
        this.player.frameY = 4;
        this.player.maxFrame = 6;

    }
    handleInput(input) {
        if (input === 'PRESS left') {
            // set state to FallingLeft
            this.player.setState(states.FALLING_LEFT);
        } else if (this.player.onGround()) {
            // set state to StandingRight
            this.player.setState(states.STANDING_RIGHT);
        }
    }
} // end class JumpingLeft