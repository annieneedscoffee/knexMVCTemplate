
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {company_id: 1, first_name: 'Bob', last_name: 'Howdy', email: 'b.h@gmail.com', position: 'President'},
        {company_id: 2, first_name: 'Arny', last_name: 'Smith', email: 'ar.smith@gal.com', position: 'Clerk'},
        {company_id: 3, first_name: 'Kelly', last_name: 'Laurel', email: 'Ms.Laurel@aol.com', position: 'VP'}
      ]);
    });
};
