exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('users')
}
