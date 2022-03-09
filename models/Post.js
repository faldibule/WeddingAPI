const mongoose = require('mongoose')
const schema = mongoose.Schema

const postSchema = new schema({
    nama: {
        type: String
    },
    body: {
        type: String
    },
    date: {
        type: Date
    },
    comments: [
        {
            type: schema.Types.ObjectId,
            ref: "Comment"
        },
    ]
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post