const spawn = require('child_process').spawn;
const cmd = '/opt/homebrew/bin/ffmpeg';

const generateThumbnail = (videoId) => {

    // const args = [
    //     '-y',
    //     '-i', `http://127.0.0.1:3000/videos/`+videoId,
    //     '-ss', '00:00:05',
    //     '-vframes', '1',
    //     '-vf', 'scale=-2:300',
    //     'thumbnails/'+videoId+'.png',
    // ];

    // console.log(args);

    // spawn(cmd, args, {
    //     detached: true,
    //     stdio: 'ignore'
    // }).unref()
}

module.exports = generateThumbnail;