const Project = require('./model')

function projectCompletion(req, res, next) {
    const { project_completed } = req.body
    if (project_completed === 0) {
        project_completed === false
    } else if (project_completed === 1) {
        project_completed === true
    } else {
        next()
    }
}

module.exports = { projectCompletion }