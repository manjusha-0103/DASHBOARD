const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema(
  {
    end_year : {
        type : String,
        required : false
    },
    intensity : {
        type : Number,
        required : true,
    },
    sector :{
        type :String,
        required : true
    },
    topic :{
        type : String,
        required : true
    },
    insight :{
        type : String,
        required : true
    },
    url :{
        type : String,
        rquired : true
    },
    region : {
        type : String,
        required : true
    },
    start_year:{
        type : String,
        required : true
    },
    impact :{
        type : String,
        required : false
    },
    added :{
        type : String,
        required : false
    },
    published :{
        type : String,
        required : true
    },
    country :{
        type : String,
        required : true
    },
    relevance :{
        type : Number,
        required : true
    },
    pestle : {
        type : String,
        required : true
    },
    source : {
        type : String,
        required : true
    },
    title : {
        type : String,
        rquired : true
    },
    likelihood : {
        type : Number,
        required : true
    }

  },
  {timestamps : true}
    
);

module.exports = mongoose.model("Data", dataSchema);