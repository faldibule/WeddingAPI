const Comment = require("../models/Comment")
const Post = require("../models/Post")
const pagination = require("../utils/pagination")

const postController = {
    getPost: async (req, res) => {
        try {
            const currentPage = parseInt(req.query.page)
            const data = await pagination.find(Post, currentPage, 3)
            
            res.status(200).json({
                message: 'Get Post',
                data
            })
        } catch (err) {
            console.log(err)
        }
    },

    postPost: async (req, res) => {
        try {
            const data = {
                nama: req.body.nama,
                body: req.body.body,
                date: Date.now(),
                comments: undefined,
            }
            const insert = await Post.insertMany(data)
            if(insert){
                res.json({
                    message: 'Berhasil',
                    data: insert[0]
                })
            }
        } catch (err) {
            console.log(err)
        }
    },

    postComment: async (req, res) => {
        try {
            const post = await Post.findById(req.body.postId);
            const data = {
                nama: req.body.nama,
                body: req.body.body,
                date: Date.now()
            }
            const insert = await Comment.insertMany(data)
            post.comments.push(insert[0]._id);
            await post.save();
            if(insert){
                res.json({
                    message: 'Berhasil Comment',
                    data
                })
            }
            
        } catch (err) {
            console.log(err)
        }
    },

    clearData: async (req, res) => {
        try {
            const cek1 = await Comment.deleteMany({})
            const cek2 = await Post.deleteMany({})
            if(cek1 && cek2){
                return res.status(200).json({
                    message: 'Clear Database'
                })
            }
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = postController