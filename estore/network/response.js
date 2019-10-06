const boom = require('@hapi/boom');
const chalk = require("chalk");

exports.success = function(req, res, message, status, details="ok"){
	res.status(status || 200).send({
		error: '',
		info: details,
		body: message
	});
}

exports.error = function(req, res, message, status, details){
	//console.error("[Response Error]" + details);
	console.error(chalk.red("[Response Error] " + details));

	res.status(status || 500).send({
		error: message,
		body: ''
	});
}