const gamecanvas = document.querySelector("#gamecanvas");
gamecanvas.width=window.innerWidth;
gamecanvas.height=window.innerHeight;
gamecanvas.style.backgroundColor="white";

const context = gamecanvas.getContext("2d");
context.fillStyle="black";
context.strokeStyle="white";


for(let i=0;i<12;i++){
    for(let j=0;j<12;j++){
        if((i+j)%2!=0){
        context.fillRect(i*50,j*50,50,50);        
    }
}
} 




// context.fillRect(100,100,400,200);
// context.beginPath();
// context.arc(100,100,50,0,Math.PI*2);
// context.strokeStyle="black";
// context.closePath();    

// context.moveTo(300,300);
// context.fillText("hello",300,300);



// class Circle{
//     x=100
//     y=100;
//     z=50;
//     s=0;
//     constructor(a,b,c,speed){
//         this.x=a;
//         this.y=b;
//         this.z=c;
//         this.s=speed;
//     }
//     display(){
//         console.log(this.x);
//     }
//     draw(){
//         context.beginPath();
//         context.arc(this.x,this.y,this.z,this.s,Math.PI*2);
//         context.stroke();
//         context.closePath();
//     }
// }

// let c=new  Circle(300,300,100,0);
// c.display();
// c.draw()


// function animate(){
//     requestAnimationFrame(animate);
//     context.clearRect(0,0,window.innerWidth,window.innerHeight)
//     c.s+=1;
//     c.draw()
// }
// animate();



