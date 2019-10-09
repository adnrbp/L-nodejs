require('dotenv').config();

const config = {
	dev: process.env.NODE_ENV !== 'production',
	host: process.env.HOST || "0.0.0.0",
	port: process.env.PORT || 3001,

	cors: process.env.CORS,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbHost: process.env.DB_HOST,
	dbName: process.env.DB_NAME
}

module.exports = { config };