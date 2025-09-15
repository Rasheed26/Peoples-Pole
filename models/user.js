const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
    age: {
        type:Number,
        required:true
    },
    email:{
        type:String,
    },
    mobile:{
        type:String,
    },
     address:{
        type:String,
        required:true
    },
    aadharCardNumber:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['admin','voter'],
        default:'voter'
    },
    isVoted:{
        type:Boolean,
        default:false
    }

    

});

//export the user schema
const User = mongoose.model('User', userSchema);
module.exports=User;



