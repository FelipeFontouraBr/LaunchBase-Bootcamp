// Validação dos campos utilizando keys e constructor Object

// FS -> O sistema irá criar um data
const fs = require('fs')
const data = require('./data.json') //chamamos para que os dados sejam todos guardados

// CREATE
exports.post = function (req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Por favor, ha campos que faltam preencha todos os campos')
        }
    }

    // Data processing
    //let {avatar_url, name, birth, select, type_class, instruments} = req.body

    /*birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    // Data organization
    /*data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        select,
        type_class,
        instruments,
        created_at
    })*/

    // Setting Json
    fs.writeFile("data.json", JSON.stringify(req.body), function(err) {
        if(err) {
            return res.send("Erro na escrita campeão")
        }

        return res.redirect("/teachers")
    })

    //return res.send(req.body)

}