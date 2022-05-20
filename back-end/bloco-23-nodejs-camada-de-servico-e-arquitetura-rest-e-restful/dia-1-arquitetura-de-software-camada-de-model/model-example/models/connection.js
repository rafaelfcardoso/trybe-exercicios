// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'Rafael',
	password: '******',
	database: 'model_example' });

module.exports = connection;


