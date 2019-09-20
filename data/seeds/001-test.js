
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pizzas').del()
    .then(function () {
      // Inserts seed entries
      return knex('pizzas').insert([
        {id: 1, name: 'Pepperoni'}
      ]);
    });
};
