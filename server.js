'use strict'

const hapi = require('hapi')
const Vision = require('vision')
const Handlebars = require('handlebars')
const Path = require('path')

const routes = require('./routes/feedly')

const port = process.env.port || 8000
const server = new hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'javascript')
            }
        }
    }
})

//console.log(server)//

server.register(Vision, function (err) {
    if (err) {
        console.log('Cannot register vision')
    }

    // configure template support
    server.views({
        engines: {
            html: Handlebars
        },
        path: __dirname + '/html'
    })
})

server.register(require('inert'), function (err) {})

server.connection({port: port})


server.route(routes)

server.route({
    method:'GET',
    path:'/search',
    handler: function (req, res) {
        res.view('search',{})
    }
})

server.route({
    method:'GET',
    path:'/article',
    handler: function (req, res) {
        res.view('article',{})
    }
})

server.route({
    method: 'GET',
    path: '/javascript/search.js',
    handler: function (req, res) {
        res.file('search.js')
    }
})

server.start(function (err, data) {
    if (!err)  {
        console.log('server started on port '+ port)
    }
})
