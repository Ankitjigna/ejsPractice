const express=require("express");
const app=express();
const path=require("path");

const port = 8080;


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req, res)=>{
    res.render("home.ejs");
});

// app.get("/rolldice",(req, res)=>{
//     res.render("rolldice.ejs");
// });

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});

app.get("/rolldice",(req, res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{ diceVal} );
});

app.get("/ig/:username",(req, res)=>{
    const likes =["ravan","ram","dhanus","raviteja"];
    let {username}=req.params;
    res.render("insta.ejs",{ username , likes} );
});