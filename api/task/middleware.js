const db = require('../../data/dbConfig')

const validateProjectId = async (req, res, next) => {
    try {
        const existing_project_id = await db('projects')
            .select('project_id')
            .where('project_id', req.body.project_id)
            .first()
        
        if (!existing_project_id) {
            next({
                status: 404,
                message: "project_id not found"
            })
        } else {
            next()
        }
    }catch (err) {
        next(err)
    }
}

module.exports = { validateProjectId }