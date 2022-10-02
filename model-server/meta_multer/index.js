var express = require("express");
var app = express();
var fs = require("fs");
var router = express.Router();
var multer = require("multer");
const shortid = require('shortid');
const mongoose = require('mongoose');
const Video = require('./schema');

const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://127.0.0.1/StageMix2',{useNewUrlParser:true}, (err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("connected to mongoDB");
  }
});

app.set("view engine", "ejs");



var USERNAME = undefined;

var storage = multer.diskStorage({
  // 2
  destination(req, file, cb) {
    cb(null, `uploadedFiles/`);
  },
  filename(req, file, cb) {
    // cb(null, `${Date.now()}__${file.originalname}`);
    cb(null, `${USERNAME}/${Date.now()}.mp4`);
  },
});

var uploadWithOriginalFilename = multer({ storage: storage }); // 3-2

router.get("/", function (req, res) {
  res.render("upload");
});

// 다수 파일 이름 안 섞기
router.post(
  "/upload/:userName",
  uploadWithOriginalFilename.array("attachments"),
  function (req, res,next) {
    console.log("sibalnom~");
    video = new Video({
      userName : req.params.userName||'no id',
      videoId : USERNAME,
    })
    video.save((err)=>{
      if(!err){
        // res.send( { videoId:USERNAME, info:{file: null, files: req.files} });
        res.redirect('http://localhost:3002/video?videoId='+USERNAME);
        return ;
      } else {
        res.json({
          message : "fail"
        })
        console.log(err);
        return ;
      }
    })
    
  }
);

app.use("/upload", (req, res, next)=>{
  console.log("middle ware~!")
  USERNAME = shortid.generate();
  var dir = `./uploadedFiles/${USERNAME}`;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  next();
})
app.use("/", router);

app.get('/videos',(req, res, next)=>{
  Video.find((err,videos)=>{
    res.send(videos);
  })
  console.log("미친새끼야");
  return;
})


var port = 3001;
app.listen(port, function () {
  console.log("server on! http://localhost:" + port);
});
