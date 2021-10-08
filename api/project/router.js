// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')
const { projectCompletion } = require('./middleware')

router.get('/', projectCompletion, async (req, res, next) => {
    try {
        const projects = await Project.getAll()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    Project.insert(req.body)
        .then(project => {
            res.status(201).json(project)
        }).catch(next)
})

module.exports = router