const express = require('express')
const fs = require('fs') 
const path = require('path') 
const app = express()
const http = require('http');
const pythonBash = require('./swarm');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/videos/:videoId', function(req, res) {
    let {videoId} = req.params;
    const path = `output/${videoId}/result.mp4`;
    const stat = fs.statSync(path);
    const fileSize = stat.size ;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, '').split('-') 
        const start = parseInt(parts[0], 10) 
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize-1 
        const chunksize = (end-start)+1 
        const file = fs.createReadStream(path, {start, end}) 
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes', 
            'Content-Length': chunksize, 
            'Content-Type': 'video/mp4', 
        }
        res.writeHead(206, head) 
        file.pipe(res) 
    } 

    else {
        const head = {
            'Content-Length': fileSize, 'Content-Type': 'video/mp4', 
        }
        res.writeHead(200, head) 
        fs.createReadStream(path).pipe(res) 
    } 

}) 

app.post('/videos', (req,res)=>{
    let videoId = req.body.videoId;
    pythonBash(videoId);
    res.send("doing convert...");
})

app.use(express.static(__dirname+'/thumbnails'));

// app.listen(3000, function () {
//     console.log('App is running on port 3000') 
// })

http.createServer(app).listen(3000,()=>{
    console.log('create server at 3000')
})