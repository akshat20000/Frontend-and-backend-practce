const gamecanvas = document.querySelector("#gamecanvas");
gamecanvas.width=window.innerWidth;
gamecanvas.height=window.innerHeight;
gamecanvas.style.backgroundColor="white";
const context=gamecanvas.getContext("2d");     
context.fillStyle="black";
context.strokeStyle="black"; 

function circle(x,y){
    context.beginPath();
    context.arc(x,y,40,0,Math.PI*2);
    context.stroke();
    context.closePath();
}
for(let i=1;i<=10;i++){
    let x=Math.random()*window.innerWidth;
    let y=Math.random()*window.innerHeight;
circle(x,y);
context.fillText(i,x,y)

}