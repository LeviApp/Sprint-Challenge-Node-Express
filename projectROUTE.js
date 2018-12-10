const express = require('express')
const router = express.Router();

const projectDB = require('./data/helpers/projectModel.js')


router.get('/', (req,res) => {
    projectDB.get()
    .then((projects) => {res.json(projects)})
    .catch(err => {
        res
        .status(500)
        .json({message: 'Unable to get projects'})})
} )

router.get('/finished', (req,res) => {
    projectDB.get()
    .then((projects) => {res.json(projects.filter(project => {return project.completed === true;}))})
    .catch(err => {
        res
        .status(500)
        .json({message: 'Unable to get projects'})})
} )

router.get('/unfinished', (req,res) => {
    projectDB.get()
    .then((projects) => {res.json(projects.filter(project => {return project.completed === false;}))})
    .catch(err => {
        res
        .status(500)
        .json({message: 'Unable to get projects'})})
} )

router.get('/:id', (req, res) => {
    const {id} = req.params;

    projectDB.get(id)
    .then(project => {
        if (project) {res.json(project)}

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

router.get('/:id/actions', (req, res) => {
    const {id} = req.params;

    projectDB.getProjectActions(id)
    .then(actions => {
        if (actions) {res.json(actions)}

        else {
            res
            .status(404)
            .json({"message": "No actions with that id exist"})
        }
    }
    )
    .catch( err => {
        res
        .status(500)
        .json({"message": "Could not retrieve project actions."})
    }
    )

})

router.post('/', (req,res) => {
    const project = req.body;
    if (project.name && project.description){
        projectDB.insert(project)
    .then(info => {
        projectDB.get(info.id).then(response => {
            res
            .status(201)
            .json(response)})
        })
        
    .catch(err => {
        res
        .status(500)
        .json({message: "failed to add project"})
    })
    }

    else {
        res
        .status(400)
        .json({message: "missing name or description"})
    }
    
})

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    projectDB.remove(id)
    .then(count => {
        if (count) {
            res.json({message: "Project deleted"})}

        else {
            res
            .status(404)
            .json({message: "Project with this ID does not exist."})
        }

    })
    .catch(err => {
        res
        .status(500)
        .json({message: "Project could not be deleted"})
    })
})

router.put('/:id', (req,res) => {
    const project = req.body;
    const {id} = req.params;
    if (project.name && project.description) {
        projectDB.update(id, project)
        .then(count => {
            if (count) {
                projectDB.get(id).then( data => {
                    res.json(data)}
                )
            }

            else { res
                .status(404)
                .json({message:"The project with the specified ID does not exist."})}
        })
        .catch(
            err => {
                res
                .status(500)
                .json({error: "The project could not be updated"})
            }
        )

    }

    else {
        res
        .status(400)
        .json({message: "missing name or description"})
    }

})

module.exports = router;