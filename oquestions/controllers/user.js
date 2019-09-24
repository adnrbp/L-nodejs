'use strict'

function createUser(req, h) {
    console.log(req.payload)
    return 'User created'
}

module.exports = {
	createUser: createUser
};
