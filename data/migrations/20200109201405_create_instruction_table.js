
exports.up = function(knex) {
  return knex.schema.createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('step').unsigned().notNullable();
      tbl.text('direction','string').notNullable();
      tbl.integer('recipeId').notNullable().unsigned().references('id').inTable('recipes').onUpdate('CASCADE').onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('instructions');
};
