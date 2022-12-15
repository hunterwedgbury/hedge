exports.up = function(knex) {
    return knex.schema
      .createTable('users_table', (table) => {
        table.string('userId').primary();
        table.string('linkedinId');
        table.string('displayName');
        table.string('profilePicture');
      })
      .createTable('feed_table', (table) => {
        table.string('postId').primary();
        table.string('title');
        table.timestamp('date');
        table.string('name');
        table.string('stock', [4]);
        table.integer('current_price');
        table.string('forecast', [7]);
        table.text('analysis');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users_table').dropTable('feed_table');
  };