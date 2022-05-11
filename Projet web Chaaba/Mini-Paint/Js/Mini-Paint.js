var canvas = document.getElementById("game"); 
const scoreSpan = document.querySelector('.score');
let score =100;

var xMousePos = 0;
var yMousePos = 0;
document.onmousemove = function(e) {
  xMousePos = e.clientX + window.pageXOffset;
  yMousePos = e.clientY + window.pageYOffset -90;
  console.log(xMousePos, yMousePos);
};

function couleurrandom() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var rayon = 100;

canvas.addEventListener('click', event => {
    var canvas = document.getElementById("game"); 
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(xMousePos,yMousePos, rayon, 0, 2 * Math.PI);
    context.fillStyle=couleurrandom();
    context.fill();
});

canvas.addEventListener('wheel', function(e) {
    if (event.deltaY>0){
        rayon = rayon -5;
        score -=5;
        scoreSpan.textContent = score;
        if (rayon<1){
            rayon = 1;
            score = 1;
            scoreSpan.textContent = score;
        }
    }
    else {
        rayon = rayon +5;
        score +=5;
        scoreSpan.textContent = score;
    }
});
    