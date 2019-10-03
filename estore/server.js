// Server

// Express
const express = require('express');

// Express - Middlewares
const bodyParser = require('body-parser');

// node.js
const path = require("path");

// Configs
const { config } = require('./config/index');

// Routes
const router = require('./network/routes');





// Server
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Routes
router(app)

// View Engine setup
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');


const server = app.listen(config.port, config.host, function(){
	console.log(`Listening http://localhost:${server.address().port}`);
});