
module.exports = {
  client: 'sqlite3', // specifies DBMS
  useNullAsDefault: true, // helps sqlite & knex work properly with null values
  connection: {
    filename: './data/cars.db3', // location of our DB file
  }
};
