const express = require('express')
const Product=require('../model/ProductModel/ProductModel')
const router = express.Router()
var jwt = require('jsonwebtoken');
require('dotenv').config()
const { matchedData, validationResult, body } = require('express-validator');

router.post('/create',[
    body('title').notEmpty().withMessage('title is required'),
    body('description').notEmpty().withMessage('description is required'),
    body('price').notEmpty().withMessage('price is required'),
    body('image').isLength({ min: 5 }).withMessage('image is requried'),
], async(req, res)=>{

    const result = await validationResult(req);
    // const {name,mobile,email,password}=req.auth.body
    if (result.isEmpty()) {
        const data = matchedData(req);
        const product=await Product.create({
            title:data.title,
            description:data.description, 
            price:data.price, 
            image:data.image
          })
    
        
          
          success=true
          return res.json({success,product})
          
      }
      success=false
    const error = result.errors.map(error => error.msg);
    return res.json({success, error:error[0]});

    //   res.send({ msg:'All Record is required'  });
      
}) 




module.exports = router;

 