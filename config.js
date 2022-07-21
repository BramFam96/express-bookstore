/** Common config for bookstore. */
require('dotenv').config()

const env = process.env.NODE_ENV
const pass = process.env.LOCAL_DB_PW || process.env.DB_PW

const DB_CONFIG = {
	database: env == 'test' ? 'test_books' : 'books',
	password: pass ? pass : LOCAL_DB_PW,
}

module.exports = { DB_CONFIG }
