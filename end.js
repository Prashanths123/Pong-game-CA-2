const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ballRadius = 10;
const paddleHeight = 100;
const paddleWidth = 10;

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let paddleX = (canvas.width - paddleWidth) / 2;

document.addEventListener('mousemove', (event) => {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    paddleX = event.clientX - rect.left - root.scrollLeft - paddleWidth / 2;
});

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = 'skyblue';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if (x - ballRadius < 0) {
        dx = -dx;
    }
    if (x + ballRadius > canvas.width) {
        dx = -dx;
    }
    if (y - ballRadius < 0) {
        dy = -dy;
    }
    if (y + ballRadius > 0 + paddleHeight && x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
    }
    if (y + ballRadius > canvas.height) {
        alert('Game Over');
        document.location.reload();
    }

    x += dx;
    y += dy;

    requestAnimationFrame(draw);
}

draw();