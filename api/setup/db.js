const sqlite3 = require('sqlite3').verbose();

let filename = process.env.DB_FILENAME || ':memory:';

let db = new sqlite3.Database(filename);

module.exports = {
    db
};