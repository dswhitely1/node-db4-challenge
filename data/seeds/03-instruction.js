
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
          {step: 1, direction: 'Heat oven to 375°F.', recipeId: 1},
          {step: 2, direction: 'Add the sausage to a medium saute pan. Cook over medium-high heat until browned, crumbling the sausage with a spoon as it cooks. Remove sausage with a slotted spoon and transfer to a large mixing bowl. Reserve about 1 tablespoon of sausage grease in the saute pan, discarding the rest. Add the onion and red pepper* to the saute pan, and saute for 5 minutes until cooked. Add the garlic and saute for an additional 2 minutes until fragrant. (If using the jarred roasted red peppers, wait to stir them until after the garlic.) Pour the vegetable mixture into the mixing bowl with the sausage. Add the hash browns and 1 1/2 cups cheese to the mixing bowl with the sausage and veggies. Stir to combine.', recipeId: 1},
          {step: 3, direction: 'In a separate bowl, whisk together the eggs, milk and black pepper until combined. Then add them to the hashbrown mixture, and stir to combine. Pour the mixture into a 11×7-inch or a 9×9-inch baking dish (a 9×13-inch dish will also work), and top with the remaining 1/2 cup of shredded cheese. Cover with aluminum foil and bake for 30 minutes. Then remove the aluminum foil and bake for an additional 10-15 minutes until the potatoes in the center are cooked through.  (I recommend just using a fork to pull out one of the potatoes in the center of the casserole, and test it to see whether it’s tender and cooked through). Remove and let the casserole rest for 5 minutes. Sprinkle with green onions and serve!', recipeId: 1}
      ]);
    });
};
