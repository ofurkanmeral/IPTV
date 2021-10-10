const express=require("express");
const app=express();
const path=require("path")
const mongoose=require("mongoose");

const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://onur:17492154@shop.8nvou.mongodb.net/IPTV?retryWrites=true&w=majority",{useNewUrlParser:true},{ useUnifiedTopology: true })
.then(() => {
    console.log('handle success here');
 }).catch((e) => {
    console.log('handle error here: ', e.message)
 })

const IPSchema={
    name:String,
    password:String,
    host:String,
    port:String,
    
}

const Note=mongoose.model("Note",IPSchema)

app.get("/",function(req,res){
    res.sendFile(__dirname+"/giris.html");
})

app.post("/",function(req,res){
    let newNote=new Note({
        name:req.body.name,
        password:req.body.password,
        host:req.body.host,
        port:req.body.port
    })
    newNote.save()
    res.sendFile(__dirname+'/IPtv.html')
})

app.get("/kanallar",function(req,res){
    res.sendFile(__dirname+'/kanallar.html')
})

app.listen(3000,function(){
    console.log("server faal")
})