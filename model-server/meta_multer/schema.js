const mongoose = require('mongoose');
const shortid = require('shortid');
let Schema = mongoose.Schema;

let VideoSchema = new Schema({
    userName : String,
    videoId : String,
})

module.exports = mongoose.model('Video',VideoSchema);