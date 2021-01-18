const express = require('express');
const app = express();
var mongoose =require('mongoose');
const  route  = require('./routes');







const port=process.env.PORT||3000
app.use(express.json())

app.use((req, res, next) => {
 
    res.setHeader("Access-Control-Allow-Origin", "http://192.168.29.153:4200");
    res.header('Access-Control-Allow-Credentials', true);
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
  app.listen(port,"0.0.0.0",(req,res)=>{
    console.log("server running")
    
  })

  
  






//mongoose connection

mongoose.connect('mongodb://localhost:27017/users').then(()=>{console.log("db connected")})
