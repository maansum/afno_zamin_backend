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
                        res.status(400).json(err)
                    }else{
                        console.log(user)
                        res.json(user)
                    }
                    
                })
            }else{

            res.json({
                message:'email is not available'
            })   
            }
        }
    })
    
})
//for login
router.post('/login',(req,res)=>{
    console.log(req.body);
    User.findOne({username:req.body.username,password:req.body.password},(err,user)=>{
        console.log(err)
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
//             const storage = multer.diskStorage({
//                 destination: './upload/images',
//                 filename: (req, file, cb) => {
//                     return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//                 }
//             })
            
//             const upload = multer({
//                 storage: storage,
//                 limits: {
//                     fileSize: 10
//                 }
//             })
//             app.use('/profile', express.static('upload/images'));
//             app.post("/upload", upload.single('profile'), (req, res) => {
            
//                 res.json({
//                     success: 1,
//                     profile_url: `http://localhost:4000/profile/${req.file.filename}`
//                 })
//             })
            
//             function errHandler(err, req, res, next) {
//                 if (err instanceof multer.MulterError) {
//                     res.json({
//                         success: 0,
//                         message: err.message
//                     })
//                 }
//             }
//             app.use(errHandler);
         
module.exports = router