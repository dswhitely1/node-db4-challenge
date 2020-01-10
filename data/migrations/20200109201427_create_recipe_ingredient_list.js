exports.up = function (knex) {
    return knex.schema.createTable('recipe_ingredients', tbl => {
        tbl.integer('recipeId').notNullable().unsigned().references('id').inTable('recipes').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.integer('ingredientId').notNullable().unsigned().references('id').inTable('ingredients').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.float('quantity').notNullable();
        tbl.string('uom').notNullable();
        tbl.primary(['recipeId', 'ingredientId']);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('recipe_ingredients');
};
