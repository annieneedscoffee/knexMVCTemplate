exports.up = function(knex, Promise) {
  return knex.schema.createTable('members', (table)=>{
    table.increments();
    table.integer("company_id");
    table.string("first_name");
    table.string("last_name");
    table.string("email");
    table.string("position")
    table.timestamps(true,true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('members');
};
