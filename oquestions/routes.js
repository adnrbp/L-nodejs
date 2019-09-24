'use strict'

const site = require('./controllers/site')
const user = require('./controllers/user')

module.exports = [
{
    method: 'GET',
    path: '/',
    handler: site.home
},
{
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            index: ['index.html']
        }
    }
},
{
    method: 'GET',
    path: '/register',
    handler: site.register
},
{
    method: 'POST',
    path: '/create-user',
    handler: user.createUser
}
]