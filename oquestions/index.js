'use strict'

const Hapi = require('hapi')
const handlebars = require('handlebars')
const inert = require('inert')
const path = require('path')
const routes = require('./routes')
const vision = require('vision')

// Instance of Hapi Server
const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
    routes: {
        files: {
            relativeTo: path.join(__dirname,'public')
        }
    }
})



async function init() {

    try {
        // Register Plugins
        await server.register(inert)
        await server.register(vision)


        // Define Views
        server.views({
            engines:{
                hbs: handlebars
            },
            relativeTo: __dirname,
            path: 'views',
            layout: true,
            layoutPath: 'views'
        })

        // Define Routes
        server.route(routes)

        // Run Server
        await server.start()

    } catch (error){
        console.error(error)
        process.exit(1)
    }

    console.log(`Servidor lanzado en: ${server.info.uri}`)
}

init()