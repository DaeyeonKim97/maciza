const { spawn } = require('child_process');
const generateThumbnail = require('./thumbnail_generator');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors:{origin: "*"}
});



http.listen(3334, () => {
    console.log('Socket Server Connect at 3334');
})

var sexocket = undefined;

io.on('connection',(socket)=>{
    console.log('connected');

    socket.on('disconnect',()=>{
        console.log('user disconnected');
    });

    sexocket = socket;
})

module.exports = function swarm(videoId){

    console.log('start spawn');

    spawn('mkdir',[`./output/${videoId}`]);
    console.log(videoId);

    const ls = spawn('myvenv/bin/python', ['app.py', '--video_path',`./meta_multer/uploadedFiles/${videoId}`,'--result_path',`./output/${videoId}/result.mp4`,'--thumbnail_path',`./thumbnails/${videoId}.png`]);

    ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    ls.stdout.on('end', (data)=>{
        console.log('끝!!!!!!!!!!!!!!!!!!!!!')
        generateThumbnail(videoId);

        sexocket.emit('task complete');
    })

    ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    });
}

// const ls = spawn('myvenv/bin/python', ['app.py', '--video_path','./input','--result_path','./output/result.mp4']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });