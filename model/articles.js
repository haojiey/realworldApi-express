const mongoose = require("mongoose");
const baseModel = require('./base-model')
const Schema = mongoose.Schema
var articleSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    tagList:{
        type:[String],
        default:null 
    },
    favoritesCount:{
        type:Number,
        default:0
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
   ...baseModel
  });
module.exports = articleSchema