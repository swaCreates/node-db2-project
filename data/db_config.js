// configures database and connects sqlite3 (knex) to server to perform CRUD operations

const knex= require('knex');
const knexfile= require('../knexfile.js');

module.exports= knex(knexfile);