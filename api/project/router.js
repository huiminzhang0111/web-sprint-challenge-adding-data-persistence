// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAll()
        const the_projects = projects.map(project => {
            if (project.project_completed === 0) {
                project.project_completed = false
            } else {
                project.project_completed = true
            }
        })
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then(project => {
            res.status(201).json(project)
        }).catch(next)
})

module.exports = router