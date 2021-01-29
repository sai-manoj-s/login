const express = require('express')
const routes= express.Router()
var bodyParser  = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const User = require("../backend/Users")
const { error } = require('console')
var jsonParser = bodyParser.json()

routes.post("/register",jsonParser,(req,res, next)=>{
  console.log("req call")
   
    bcrypt.hash(req.body.password,10)
    .then(hash=>    {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.UserName,
            password: hash
        });
        console.log(user)
        user.save().then(result=>{
           res.status(201).json({
               'message':"user created"
           })
           next();
        }).catch(err=>{
            res.status(201).json({
                code:201
                
            })
        });
       
    }).catch(err=>{
        res.status(502).json({
            'message':err,
        })
        next();
    })
    
})

routes.post("/login",(req,res)=>{
    
        User.findOne({"userName":req.body.userName}).then(result=>{
           let uname=result.firstName
            if(result===null){
                return res.status(201).json({"message":"incorrect username"})
            }
            bcrypt.compare(req.body.password,result.password).then(result=>{
                if(!result){
                   return  res.status(201).json({'message':'incorrect password'})
                }
                
                const token = jwt.sign({userId:result._id,fname:result.firstName,lname:result.lastName},"qazswedxcsaqqewaxeaSZFDWAERDSFASAERQWREASDF",{expiresIn:"1h"})
                console.log(result)
                res.status(200).send(
                {   "token": token,
                    "message":"authenticate",
                    "userName":uname
                })
            })
           
        }).catch(error=>{
                console.log(error)
            })
        })
    



module.exports=routes