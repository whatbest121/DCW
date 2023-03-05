const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    msg:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model('Post',PostSchema)