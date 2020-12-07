const express = require('express');
var mongoose =require('mongoose');
const  route  = require('./routes');

const app = express();
const port=3000
app.use(express.json())

app.use((req, res, next) => {
 
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    
   
    next();
  });
  app.use("/api",route)
  app.listen(port,(req,res)=>{
    console.log("server running")
    
  })






//mongoose connection

mongoose.connect('mongodb://localhost:27017/users').then(()=>{console.log("db connected")})
