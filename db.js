/** Database config for database. */


const { Client } = require('pg')
const {DB_CONFIG} = require('./config')


const db = new Client(DB_CONFIG)

db.connect()

module.exports = db
