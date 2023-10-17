const express = require('express')
const User=require('../model/authmodel/AuthModel')
const router = express.Router()
var jwt = require('jsonwebtoken');
require('dotenv').config()
const { matchedData, validationResult, body } = require('express-validator');

router.post('/register',[
    body('name').notEmpty().withMessage('Name is required'),
    body('mobile').notEmpty().withMessage('Mobile number is required'),
    body('email').notEmpty().withMessage('Email is required'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
], async(req, res)=>{

    const result = await validationResult(req);
    // const {name,mobile,email,password}=req.auth.body
    if (result.isEmpty()) {
        const data = matchedData(req);
        let user= await User.findOne({email:req.body.email});
        if(user){
          success=false
         return res.json({success,error:"email already exits"})
        }
        const users=await User.create({
            name:data.name,
            mobile:data.mobile, 
            email:data.email, 
            password:data.password
          })
    
          const userdata = {
            user:{
              id: users.name
            }
          }
          const authtoken = jwt.sign(userdata, process.env.JWT_SECRET);
          success=true
          return res.json({success,authtoken:authtoken})
          
      }
      success=false
    const error = result.errors.map(error => error.msg);
    return res.json({success, error:error[0]});

    //   res.send({ msg:'All Record is required'  });
      
}) 

router.post('/login',[
    body('email').notEmpty().withMessage('Email is required'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
], async(req, res)=>{

    const result1 = await validationResult(req);
    // const {name,mobile,email,password}=req.auth.body
    if (result1.isEmpty()) {
        const data = matchedData(req);
        try {
          let user = await User.findOne({email:data.email});
          if(!user){
            success=false
            return res.json({success,error: "Please try to login with correct credentials"});
          } 
      
          const passwordCompare = await data.password==user.password;
          if(!passwordCompare){
            success=false
            return res.json({success,error: "Please try to login with correct credentials"});
          }
      
          const userdata = {
            user:{
              id: user.name
            }
          }
          const authtoken = jwt.sign(userdata, process.env.JWT_SECRET);
          success=true
          return res.json({success,authtoken})
      
        } catch (error) {
          // return console.error(error.message);
          return res.status(500).send("Internal Server Error");
        }
          
      }
      success=false
    const error = result1.errors.map(error => error.msg);
    return res.send({success, error:error[0]});

    //   res.send({ msg:'All Record is required'  });
      
}) 


module.exports = router;

 