let n=document.getElementById("btn");
let input=document.getElementById("input") as HTMLInputElement;

n.addEventListener("click",(e)=>{
    if(input.type=="password"){
        input.type="text";
    }else{
        input.type="password";  
    }   
})