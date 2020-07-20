const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("/teachers")
})

routes.get('/instructors', function(req, res) {
    return res.render("teachers/index")
})