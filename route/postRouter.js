const express = require('express')
const route = express.Router()
const postController = require('../controller/postController')


route.get('/post', postController.getPost)
route.post('/post', postController.postPost)



module.exports = route