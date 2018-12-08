const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const server = express()

const projectDB = require('./data/helpers/projectModel.js')
const actionDB = require('./data/helpers/actionModel.js')

const NUM = 4444;

server.use(
    express.json(),
    helmet(),
    morgan('dev'),
)

server.get('/api/projects', (req, res) => {
        projectDB.get()
        .then(users => {res.json(users)})
        .catch( err => {
            res
            .status(500)
            .json({"message": "Could not retrieve projects"})
        }
        )

})

server.get('/api/actions', (req, res) => {
        actionDB.get()
        .then(actions => {res.json(actions)})
        .catch( err => {
            res
            .status(500)
            .json({"message": "Could not retrieve projects"})
        }
        )

})

server.listen(NUM, () => {
    console.log(`server listening on port ${NUM}`)
})