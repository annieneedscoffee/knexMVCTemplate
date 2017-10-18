
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {name: 'Dewey, Cheatem & Howe', description: 'Pyramid scheme Co.', suiteNumber: 122},
        {name: 'Gizmos R Us', description: 'makes gizmos', suiteNumber: 125},
        {name: 'Widgets Incorporated', description: 'widgets distributer', suiteNumber: 305}
      ]);
    });
};
