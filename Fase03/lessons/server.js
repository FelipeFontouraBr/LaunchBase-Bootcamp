const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')
const server = express()

// Setting server to search static files:
server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(methodOverride('_method'))
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