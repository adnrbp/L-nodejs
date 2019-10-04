const boom = require('@hapi/boom');
const { config } = require('../../config/index');

// Manage dev verbosity
function withErrorStack(error, stack){
	if(config.dev) {
		return { ...error, stack}
	}
	return error;

}

// Log print errors
function logErrors(err, req, res, next){
	console.log(err);
	next(err);
}

// Keep Boom struct among all errors
function wrapErrors(err, req, res, next){
	if(!err.isBoom){
		next(boom.badImplementation(err))
	}
	next(err);
}


// Response errors
function errorHandler(err, req, res, next){ 
	// get output from Boom error
	const { 
		output: { statusCode, payload } 
	} = err;

	res.status(statusCode);
	res.json(withErrorStack(payload, err.stack));
}

module.exports = {
	logErrors,
	wrapErrors,
	errorHandler
}