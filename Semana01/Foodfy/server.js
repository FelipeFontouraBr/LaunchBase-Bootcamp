const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// Setting server
server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

//Routes
// Index
server.get("/", function(req, res){
    return res.render('index')
})

// About
server.get("/about.html", function(req, res){
    return res.render('about')
})

// Revenue
server.get("/revenue.html", function(req, res){
    return res.render('revenue')
})

// Problem 404


server.listen(5000, function(){
    console.log('The server is running')
})