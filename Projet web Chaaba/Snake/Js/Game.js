const GAME_SIZE = 500;
const SQUARE_SIZE = 25;
const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');
const scoreSpan = document.querySelector('.score');
let score = 0;
const snake = new Snake(SQUARE_SIZE);
const food = new Food();
const poison = new Poison();
let currentDirection = 'right';
let gameOver = false;
const eatAudio = new Audio()
eatAudio.src = 'manger.mp3'
const eatAudio2 = new Audio()
eatAudio2.src = 'mort.mp3';
const eatAudio3 = new Audio()
eatAudio3.src = 'beurk.mp3';

function deteckKeyPressed() {
    document.addEventListener('keydown', function(event) {
        switch (event.key) {
            case 'ArrowLeft':
                currentDirection = 'left'
                break;
            case 'ArrowRight':
                currentDirection = 'right'
                break;
            case 'ArrowUp':
                currentDirection = 'up'
                break;
            case 'ArrowDown':
                currentDirection = 'down'
                break;
            default:
                break;
        }
    });
}
function clearScreen() {
    ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE);
}
function update(){
    clearScreen();
    food.draw();
    poison.draw();
    snake.update();
    if (snake.alive){
        setTimeout(update, 100);
    }
    if (gameOver) {
          ctx.fillStyle = "white";
          ctx.font = "50px Verdana";
          var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          gradient.addColorStop("0", "yellow");
          gradient.addColorStop("0.5", "orangered");
          gradient.addColorStop("1.0", "red");
          ctx.fillStyle = gradient;
          ctx.fillText("Game Over !", canvas.width / 5, canvas.height / 2);
    }
}

function start(){
    deteckKeyPressed();
    update();
}


