
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
          {name: 'Easy Breakfast Casserole with Sausage, Hashbrowns and Eggs'}
      ]);
    });
};
