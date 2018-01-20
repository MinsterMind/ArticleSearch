'use strict'

const axios = require('axios')

const searchFeedly = function (req, res) {
    const searchQuery = req.query.query
    const feedlyUrl = `http://feedly.com/v3/search/feeds?query=${searchQuery}&count=50&locale=en_US`;
    try {
       axios(feedlyUrl).then(function (data) {
           res(data.data.results)
       }).catch(function (err) {
           console.log(err)
       })
    }
    catch (ex) {
        return ex
    }
}

module.exports = {
    searchFeedly
}