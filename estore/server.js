// Server

// Express
const express = require('express');

// Middlewares
const bodyParser = require('body-parser');
const { 
	logErrors,
	wrapErrors,
	errorHandler 
} = require('./utils/middlewares/errorHandlers.js');

const notFoundHandler = require('./utils/middlewares/notFoundHandler');

// node.js
const path = require("path");

// Configs
const { config } = require('./config/index');

// Routes
const router = require('./network/routes');





// Server
const app = express();

// Parsing Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Routes
router(app)

// catch 404
app.use(notFoundHandler);

// Error Middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


// View Engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');


const server = app.listen(config.port, config.host, function(){
	console.log(`Listening http://localhost:${server.address().port}`);
});