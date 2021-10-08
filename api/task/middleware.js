const db = require('../../data/dbConfig')
const Task = require('./model')

async function checkProjectId(req, res, next) {
    try {
        const possibleTask = await Task.getById(req.params.task_id)
        if (possibleTask) {
            req.task = possibleTask
            next()
        } else {
            next({ status: 404, message: "project_id is required" })
        }
    } catch (err) {
        next(err)
    }
}

module.export = { checkProjectId }