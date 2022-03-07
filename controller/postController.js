const Post = require("../models/Post")

const postController = {
    getPost: async (req, res) => {
        try {
            const data = await Post.find({})
            res.status(200).json({
                message: 'Get Post',
                data,
            })
        } catch (err) {
            console.log(err)
        }
    },

    postPost: async (req, res) => {
        try {
            const data = {
                nama: req.nama,
                body: req.body,
                date: Date.now()
            }
            const insert = await Post.insertMany(data)
            if(insert){
                res.json({
                    message: 'Berhasil',
                    data
                })
            }
        } catch (err) {
            console.log(err)
        }
    },
}

module.exports = postController