exports.up = async function (knex) {
    await knex.schema
      .createTable('projects', table => {
          table.increments('project_id').notNullable()
          table.string('project_name', 255).notNullable()
          table.text('project_description', 255)
          table.boolean('project_completed').notNullable().defaultTo(false)
      })
      .createTable('resources', table => {
          table.increments('resource_id')
          table.string('resource_name', 255).notNullable().unique()
          table.text('resource_description', 255)
      })
      .createTable('tasks', table => {
          table.increments('task_id')
          table.text('task_description`', 255).notNullable()
          table.text('task_notes', 255)
          table.boolean('task_completed').notNullable().defaultTo(0)
          table.integer('project_id')
              .references('project_id')
              .inTable('projects')
      })
      .createTable('project_resources', table => {
          table.increments('project_resource_id')
          table.integer('project_id')
              .references('project_id')
              .inTable('projects')
          table.integer('resource_id')
              .references('resource_id')
              .inTable('resources')
      })
  };
  
  exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };
  
  
  