const express = require('express')
const server = express()

// Routes
// Rota Raiz
server.get("/", function(req, res){
    return res.render("content")
})

server.get("/index", function(req, res){
    return res.render("index")
})


// Start server
server.listen(5000, function(){
    console.log('The server is running')
})