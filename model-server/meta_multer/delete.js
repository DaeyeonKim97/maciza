var express = require("express");
var app = express();
var fs = require("fs");
var router = express.Router();
var multer = require("multer");
const shortid = require('shortid');
const mongoose = require('mongoose');
const Video = require('./schema');

mongoose.connect('mongodb://127.0.0.1/StageMix',{useNewUrlParser:true}, (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("connected to mongoDB");
  }
});

Video.deleteMany({userName : "DaeyeonKim97"});