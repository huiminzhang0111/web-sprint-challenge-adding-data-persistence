// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

//[GET] /api/resources
router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll()
        res.json(resources)
    } catch (err) {
        next(err)
    }
})

//[POST] /api/resources
router.post('/', (req, res, next) => {
    Resource.create({resource_name: req.body.resource_name, resource_description: req.body.resource_description})
        .then(resource => {
            res.status(201).json(resource)
        }).catch(next)
})

module.exports = router