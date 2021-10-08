// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
    .select('project_id', 'project_name', 'project_description', 'project_completed')
}

// const getById = id =>{
//     return db('projects')
//         .where('project_id', id)
//         .first()
//     }

// async function create(project) {
//     const [id] = await db('projects')
//         .insert(project)
//     return getById(id)
// }

async function createProject(project) {
    const [project_id] = await db('projects').insert(project)
    return getAll().where({ project_id }).first()
}

module.exports = {
    getAll,
    createProject
}