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
    const index = {
        avatar_chef: "./assets/chef.png",
        title_more: "Mais acessadas",
        revenues: [
            {
                revenue: "./assets/burger.png",
                title: "Triplo bacon burger",
                subtitle: "por Jorge Relato"
            },
            {
                revenue: "./assets/pizza.png",
                title: "Pizza 4 estações",
                subtitle: "por Fabiana Melo"
            },
            {
                revenue: "./assets/espaguete.png",
                title: "Triplo bacon burger",
                subtitle: "por Júlia Kinoto"
            },
            {
                revenue: "./assets/lasanha.png",
                title: "Lasanha mac n' cheese",
                subtitle: "por Juliano Vieira"
            },
            {
                revenue: "./assets/doce.png",
                title: "Docinhos pão-do-céu",
                subtitle: "por Ricardo Golvea"
            },
            {
                revenue: "./assets/asinhas.png",
                title: "Asinhas de frango ao barbecue",
                subtitle: "por Vania Steroski"
            },
        ]
    }

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