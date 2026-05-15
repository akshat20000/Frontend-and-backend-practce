const gamecanvas = document.querySelector("#gamecanvas");
gamecanvas.width = window.innerWidth;
gamecanvas.height = window.innerHeight;
gamecanvas.style.backgroundColor = "white";


const context = gamecanvas.getContext("2d");
context.strokeStyle = "black";

function circle(x, y) {
  context.beginPath();
  context.arc(x, y, 40, 0, Math.PI * 2);
  context.fillStyle = "red";
  context.fill();
  context.stroke();
  context.closePath();
}

let x = 50;
let y = 50;
let dx=1;
let dy=0;

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, gamecanvas.width, gamecanvas.height);

  circle(x, y);

  x += dx;
  y += dy;

}

animate();
