const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const server = express()

const NUM = 4444;

server.use(
    express.json(),
    helmet(),
    morgan('dev'),
)

server.listen(NUM, () => {
    console.log(`server listening on port ${NUM}`)
})