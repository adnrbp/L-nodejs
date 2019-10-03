require('dotenv').config();

const config = {
	dev: process.env.NODE_ENV !== 'production',
	host: process.env.HOST || "0.0.0.0",
	port: process.env.PORT || 3000
}

module.exports = { config };