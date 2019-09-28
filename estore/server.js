// Server

// Express
const express = require("express");

// Express - Middlewares
const bodyParser = require('body-parser');

// node.js
const path = require("path");

// Configs
const { PORT, HOST } = require("./config");

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
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "pug");


port = process.env.PORT || PORT
host = process.env.HOST || HOST

const server = app.listen(port, host, function(){
	console.log(`Listening http://localhost:${server.address().port}`);
});