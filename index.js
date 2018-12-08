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

server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;

    projectDB.get(id)
    .then(project => {
        console.log(project)
        if (project.length<1) {res.json(project)}

        else {
            res
            .status(404)
            .json({"message": "Project with that id does not exist"})
        }
    }
    )
    .catch( err => {
        res
        .status(500)
        .json({"message": "Could not retrieve project."})
    }
    )

})

server.get('/api/actions/:id', (req, res) => {
    const {id} = req.params;
    actionDB.get(id)
    .then(action => {
        if (action) {res.json(action)}

        else {
            res
            .status(404)
            .json({"message": "Action with that id does not exist"})
        }
    }
    )
    .catch( err => {
        res
        .status(500)
        .json({"message": "Could not retrieve action."})
    }
    )

})

server.listen(NUM, () => {
    console.log(`server listening on port ${NUM}`)
})