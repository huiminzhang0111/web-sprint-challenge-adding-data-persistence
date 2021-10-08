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
    Resource.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        }).catch(next)
})

module.exports = router