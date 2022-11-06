const express = require('express')
const User = require('../models/userModel')
const router = express.Router()
const Property = require('../models/addPropertyModel')

// for signup
router.post('/signup',(req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log(err)
            res.json(err)
        }else{
            if(user==null){
                const user = User({
                    username:req.body.username,
                    password:req.body.password,
                    phoneNumber:req.body.phoneNumber,
                    email:req.body.email,
                })
                user.save()
                .then((err)=>{
                    if(err){
                        console.log(err)
                        res.json(err)
                    }else{
                        console.log(user)
                        res.json(user)
                    }
                    
                })
            }else{

            res.json({
                message:'email is not avilable'
            })   
            }
        }
    })
    
})
//for login
router.post('/login',(req,res)=>{
    User.findOne({username:req.body.username,password:req.body.password},(err,user)=>{
        if(err){
            console.log(err)
            res.status(400).json(err)
        }else{
            res.json(user)   
        }
    })
})
//for adding property
// router.post('/add',(req,res)=>{ 
  
    
//      const prop = Property({
//                     title:req.body.title,
//                     price:req.body.price,
//                     area:req.body.area,
//                    location:req.body.location,
//                    purpose:req.body.purpose,
//                    structure:req.body.structure,
//                    image : req.body.image


//                 });
//                 prop.save()
//                 .then((err)=>{
//                     if(err){
//                         console.log(err)
//                         res.status(400).json(err)
//                     }else{
//                         console.log(prop)
//                         res.json(prop)
//                     }
//                 })
//             })
         
module.exports = router