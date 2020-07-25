// Validação dos campos utilizando keys e constructor Object

const fs = require('fs')
const data = require('./data.json')

// CREATE
exports.post = function (req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Por favor, preencha todos os campos')
        }
    }

    // Data processing
    let {avatar_url, name, birth, select, type_class, instruments} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    // Data organization
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        select,
        type_class,
        instruments,
        created_at
    })

    // Setting Json
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) {
            return res.send("Erro na escrita campeão")
        }

        return res.direct("/teachers")
    })



}