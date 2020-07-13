const express = require('express')
const server = express()

//Routes
// Index
server.get("/", function(req, res){
    return res.render('index')
})

// About
server.get("/about", function(req, res){
    return res.render('about')
})

// Revenue
server.get("revenue", function(req, res){
    return res.render('revenue')
})

// Problem 404


server.listen(5000, function(){
    console.log('The server is running')
})