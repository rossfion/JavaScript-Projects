export default class InputHandler{
    constructor(){
        this.lastKey = '';
        window.addEventListener('keydown', (e) => {
            console.log(e);
            switch(e.key){
                case 'ArrowLeft':
                    this.lastKey = 'PRESS left';
                    break;
                    case 'ArrowRight':
                        this.lastKey = 'PRESS right';
                        break;
            }

        });
        window.addEventListener('keyup', (e) => {
            console.log(e);
            switch(e.key){
                case 'ArrowLeft':
                    this.lastKey = 'RELEASE left';
                    break;
                    case 'ArrowRight':
                        this.lastKey = 'RELEASE right';
                        break;
            }

        });
    }
}