const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const information = require("./data")

// Setting server
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

//Routes
// Index
server.get("/", function(req, res){    
    return res.render("index", { items: information })  
})

// About
server.get("/about.html", function(req, res){
    return res.render('about')
})

// Revenue
server.get("/revenue.html", function(req, res){
    return res.render("revenue", { items: information })
})

// Problem 404


server.listen(5000, function(){
    console.log('The server is running')
})