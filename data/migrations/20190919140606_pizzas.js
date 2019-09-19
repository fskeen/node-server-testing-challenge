
exports.up = function(knex) {
    return knex.schema.createTable('pizzas', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
    })
    .createTable('toppings', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.integer('pizza_id');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('toppings').dropTableIfExists('pizzas')
};
