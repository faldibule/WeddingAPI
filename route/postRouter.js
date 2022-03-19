const express = require('express')
const route = express.Router()
const postController = require('../controller/postController')


route.get('/fetch', postController.getPost)
route.post('/post', postController.postPost)
route.post('/comment', postController.postComment)
route.post('/clearData', postController.clearData)



module.exports = route