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

// List Revenue
server.get("/listrevenue", function(req, res) {
    const id = req.query.id
    const revenue = information.find(function(revenue){
        return revenue.id == id
    })

    return res.render("listrevenue", { item: revenue })
})

// Problem 404


server.listen(5000, function(){
    console.log('The server is running')
})