const express=require("express")
const app=express()
const fs=require("fs")
app.use(express.urlencoded({extended:true}))

app.get("/data",(req,res)=>{
    res.sendFile(__dirname+"/todo.html")
})
app.post("/data",(req,res)=>{
    console.log(req.body)
    let data=JSON.stringify(req.body);
    console.log(data);
    fs.appendFileSync("todos.txt",data);
})







app.listen(3000,()=>{
    console.log("server started")
})