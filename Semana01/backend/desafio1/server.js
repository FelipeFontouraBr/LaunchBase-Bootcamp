const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const information = require("./data")

// Setting server to search static files:
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false 
})

// Routes
// Rota Raiz
server.get("/", function(req, res){
    return res.render("content", { items: information})
})

server.get("/index", function(req, res){
    const index = {
        avatar_url: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
        name: "Rocketseat",
        title: "Plataforma de educação em tecnologia",
        tecnologies: [
            {
                technologie0:"JavaScript", 
                technologie1: "ReactJS", 
                technologie2: "React Native",
                technologie3: "Nodejs"
            }
            
        ],
        links: [
            { name: "Github", url: "https://github.com/Rocketseat", img: "./img/github-logo.svg" },
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt", img: "https://rocketseat.com.br/static/images/icons/instagram.svg" },
            { name: "Facebook", url: "https://pt-br.facebook.com/rocketseat/", img: "https://rocketseat.com.br/static/images/icons/facebook.svg"}
        ]
    }

    return res.render("index", {index: index})
})

server.use(function(req, res){
    res.status(404).render("not-found");
})

// Start server
server.listen(5000, function(){
    console.log('The server is running')
})