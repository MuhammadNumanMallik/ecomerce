const mongoose =require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
 
    name:{
        type:String,
        // required:true
    },
    mobile:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        // required:true,
        unique:false
    } ,
    password:{
        type:String,
        // required:true  
    } ,
  
 
},
{timestamps:true}
);

module.exports=mongoose.model("User",UserSchema,'users')