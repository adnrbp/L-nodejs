const { config } = require('../../config/index');

// Manage dev verbosity
function withErrorStack(error, stack){
	if(config.dev) {
		return {error, stack}
	}
	return error;

}

// Log print errors
function logErrors(err, req, res, next){
	console.log(err);
	next(err);
}

// Response errors
function errorHandler(err, req, res, next){ 
	res.status(err.status || 500);
	res.json(withErrorStack(err.message, err.stack));
}

module.exports = {
	logErrors,
	errorHandler
}