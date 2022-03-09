const mongoose = require('mongoose')
const schema = mongoose.Schema

const commentSchema = new schema({
    
    nama: {
        type: String
    },
    body: {
        type: String
    },
    date: {
        type: Date
    }
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment