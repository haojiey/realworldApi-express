const mongoose = require("mongoose");
const baseModel = require('./base-model')
const md5 = require('../util/md5')
var userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        set: value => md5(value),
        select: false
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
   ...baseModel
  });
module.exports = userSchema