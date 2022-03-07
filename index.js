const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./utils/Connection')
const postRoute = require('./route/postRouter')

app.get('/', (req, res) => {
    res.json({
        message: 'Testing'
    })  
})

app.use('/post', postRoute)


app.listen(port, () => {
    console.log(`connected to ${port}`)
})