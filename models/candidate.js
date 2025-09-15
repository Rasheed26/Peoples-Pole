const mongoose = require('mongoose');
const { ref } = require('process');
//const bcrypt = require('bcryptjs');

// Define the candidate schema -- to whom u gonna vote
const candidateSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
    party:{
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    votes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref:'User',
                required:true,
            },
            votedAt : {
            type:Date,
            default:Date.now
            }
        },
        
    ],

   votedCount:{
        type:Number,
        default:0
   }
    
    

});

//export the user schema
const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports=Candidate;
