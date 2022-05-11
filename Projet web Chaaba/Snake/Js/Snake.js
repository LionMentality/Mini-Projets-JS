class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.blocksize = SQUARE_SIZE;
        this.blocks = [];
        this.addBlock(this.x, this.y);
        this.alive = true;
    }
    addBlock(x,y) {
        const block = new Block(x, y, this.blocksize);
        this.blocks.push(block);
    }
    movehead(){
        const head = this.blocks[0];
        head.oldX = head.x;
        head.oldY = head.y;
        switch (currentDirection) {
            case 'left':

                head.x -= 1;
                break;
            case 'right':
                head.x += 1;
                break;
            case 'up':
                head.y -= 1;
                break;
            case 'down':
                head.y += 1;
                break;
        
            default:
                break;
        }
        head.teleportIfOutOfMap();
    }
    calculateNewBlockPosition(){
        let {x,y} = this.blocks[this.blocks.length - 1];
        switch (currentDirection) {
            case 'left':
                x += 1;
                break;
            case 'right':
                x -= 1;
                break;
            case 'up':
                y += 1;
                break;
            case 'down':
                y -= 1;
                break;
        
            default:
                break;
        }
        return {x,y};
    }    
    eat() {
        const head = this.blocks[0];
        if (head.x === food.x && head.y === food.y) {
            food.setRandomPosition();
            const {x,y} = this.calculateNewBlockPosition(head);
            this.addBlock(x,y);
            score +=1;
            scoreSpan.textContent = score;
            eatAudio.play();
        }
        if (head.x === poison.x && head.y === poison.y) {
            poison.setRandomPosition();
            const {x,y} = this.calculateNewBlockPosition(head);
            this.addBlock(x,y);
            score -=1;
            scoreSpan.textContent = score;
            eatAudio3.play();
        }
    }
    blockTouchHead(block) {
        const head = this.blocks[0];
        const headX = head.x;
        const headY = head.y;
        return (headX === block.x && headY === block.y);
    }
    update() {
        this.movehead();
        this.eat();
        for (const [index, block] of this.blocks.entries()) {
            if (index>0) {
                const {oldX, oldY} = this.blocks[index - 1];
                block.setPosition(oldX, oldY);
                if (this.blockTouchHead(block)) {
                    this.alive = false;
                    gameOver = true;
                    eatAudio2.play();
                    console.log(gameOver);
                }
            }
            block.draw();
        }
    }
}