
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
          {name: 'Italian Sausage'},
          {name: 'White onion'},
          {name: 'Cloves garlic, minced'},
          {name: 'Red Bell Pepper'},
          {name: 'Egg'},
          {name: 'Milk'},
          {name: 'Frozen Hash Browns'},
          {name: 'Shredded Cheddar'},
          {name: 'Ground Black Pepper'}
          ]);
    });
};
