// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')
const { checkProjectId } = require('./middleware')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getAll()
        const the_tasks = tasks.map(task => {
            if (task.task_completed === 0) {
                task.task_completed = false
            } else {
                task.task_completed = true
            }
        })
        res.json(tasks)
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    Task.createTask(req.body)
        .then(task => {
            res.status(201).json(task)
        }).catch(next)
})

module.exports = router