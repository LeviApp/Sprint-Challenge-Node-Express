const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const server = express()

const actionR = require('./actionROUTE')
const projectR = require('./projectROUTE')

const NUM = 4444;

server.use(
    express.json(),
    helmet(),
    morgan('dev'),
)

server.use('/api/projects', projectR)
server.use('/api/actions', actionR)




server.listen(NUM, () => {
    console.log(`server listening on port ${NUM}`)
})