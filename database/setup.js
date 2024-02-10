const fs = require('fs')
require('dotenv').config()
const db = require('./connect')

const sql = fs.readFileSync(__dirname + '/' + 'setup.sql').toString()

db.query(sql)
    .then(data => console.log(data))
    .catch(error => console.error("Unable to set up database.", error))
    .finally(() => db.end())  // Close the database connection so Node doesn't hang in the terminal