// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('resources')
        .select('resource_id', 'resource_name', 'resource_description')
}

// const getById = id => {
//     return db('resources')
//         .where('resouce_id', id)
//         .first()
// }

// async function create(resource) {
//     const [id] = await db('resources')
//         .insert(resource)
//     return getById(id)
// }

async function createResource(resource) {
    const [resource_id] = await db('resources').insert(resource)
    return getAll().where({ resource_id }).first()
}

module.exports = {
    getAll,
    createResource
}