const express = require('express')
const routes= express.Router()
var bodyParser  = require('body-parser')
const bcrypt = require('bcrypt')


const User = require("../backend/Users")
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
            console.log("eeeeeeeeeeeeeeeeeeeeeeeee")
            res.status(200).json({
                'message':err
            })
        });
       
    }).catch(err=>{
        console.log("rrrrrrrrrrr")
        res.status(502).json({
            'message':err
        })
        next();
    })
    
})

module.exports=routes