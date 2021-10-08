// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
    .select('project_name', 'project_description', 'project_completed')
}

const getById = id =>{
    return db('projects')
        .where('id', id)
        .first()
    }

async function create(project) {
    const [ id ] = await db('projects')
        .insert(project)
    return getById(id)
}
module.exports = {
    getAll,
    create
}