
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
          {recipeId: 1, ingredientId: 1, quantity: 1, uom: 'pound'},
          {recipeId: 1, ingredientId: 2, quantity: 1, uom: 'medium, peeled and diced'},
          {recipeId: 1, ingredientId: 3, quantity: 3, uom: 'cloves'},
          {recipeId: 1, ingredientId: 4, quantity: 1, uom: 'core and diced'},
          {recipeId: 1, ingredientId: 5, quantity: 6, uom: 'N/A'},
          {recipeId: 1, ingredientId: 6, quantity: 0.33, uom: 'cup'},
          {recipeId: 1, ingredientId: 7, quantity: 20, uom: 'ounce bag'},
          {recipeId: 1, ingredientId: 8, quantity: 2, uom: 'cups'},
          {recipeId: 1, ingredientId: 9, quantity: 0.25, uom: 'teaspoon'},
      ]);
    });
};
