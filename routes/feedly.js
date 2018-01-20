'use strict'

const feedlyHandler = require('../handlers/feedlyHandler')

const routes = []

routes.push({
    method: 'GET',
    path: '/feedly/search',
    handler: feedlyHandler.searchFeedly

})

module.exports = routes