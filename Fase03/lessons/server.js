const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()

// Setting server to search static files:
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true 
})

// Start server
server.listen(5000, function(){
    console.log('The server is running')
})