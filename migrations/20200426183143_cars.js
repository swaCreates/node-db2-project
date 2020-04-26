// CLI to create file- npx knex migrate:make cars

exports.up = async function(knex) {
    await knex.schema.createTable('cars', table => {
      // table.integer('id').notNull().primary().increments();
      table.increments('id');
      table.text('VIN').notNull().unique();
      table.text('MAKE').notNull();
      table.text('MODEL').notNull();
      table.integer('YEAR');
      table.integer('MILEAGE').notNull();
      table.text('PRICE');
      table.text('TRANSMISSION TYPE');
      table.text('TITLE');
    });
  };
  
  exports.down = async function(knex) {
      await knex.schema.dropTableIfExists('cars');
  };
  
  // after writing the tables above, run the command `npx knex migrate:latest` to create 
  // the database table that will end up in the data folder
