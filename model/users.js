const mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
        default:null
    },
    image:{
        type:String,
        default:null
    },
    chartAt:{
        type:Date,
        default:Date.now
    },
    updateAt:{
        type:Date,
        default:Date.now
    }
  });
module.exports = userSchema