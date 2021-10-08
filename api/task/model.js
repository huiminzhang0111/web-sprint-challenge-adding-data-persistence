// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .select('task_description', 'task_notes', 'task_completed', 'project_name', 'project_description')

    //return db('tasks').select('task_description', 'task_notes', 'task_completed')
}

const getById = id => {
    return db('tasks')
    .where('task_id', id)
    .first()
}

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task)
    return getAll().where({ task_id }).first()
}

module.exports = { getAll, createTask, getById }