const express = require('express')
const nunjucks = require('nunjucks')

const server = express()


// Setting server to search static files:
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

// Routes
// Rota Raiz
server.get("/", function(req, res){
    return res.render("content")
})

server.get("/index", function(req, res){
    return res.render("index")
})

server.use(function(req, res){
    res.status(404).render("not-found");
})

// Start server
server.listen(5000, function(){
    console.log('The server is running')
})