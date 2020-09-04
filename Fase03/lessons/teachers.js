// Validação dos campos utilizando keys e constructor Object

// FS -> O sistema irá criar um data
const fs = require('fs')
const data = require('./data.json') //chamamos para que os dados sejam todos guardados
const { age, date } = require('./utils')

// SHOW
exports.show = function(req, res) {
    const { id } = req.params

    // procurar dentro do data.js o teacher
    const foundTeacher = data.teachers.find(function(teachers){
        return id == teachers.id
    })

    if (!foundTeacher) return res.send("Teachers not found!")

    // Correção dos dados
    const teacher = {
        ...foundTeacher,
        birth: age(foundTeacher.birth),
        //type_class: "",
        instruments: foundTeacher.instruments.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),
    }

    return res.render("teachers/show", { teacher })
}

// CREATE
exports.post = function (req, res) {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Por favor, ha campos que faltam preencha todos os campos')
        }
    }

    // Data processing
    let { avatar_url, name, birth, select, type_class, instruments } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)/*Pego o tamanho do array e adiciono mais um*/

    // Data organization
    data.teachers.push({
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
    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send("Erro na escrita campeão")
        }

        return res.redirect("/teachers")
    })

    //return res.send(req.body)

}

// EDIT
exports.edit = function(req, res) {
    // Pegar um só instrutor:
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("teachers not default")

    // Arrumando o dado
    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    // Tirei e pus para cima -> date(foundTeacher.birth)

    return res.render('teachers/edit', {teacher})
}

// PUT 
exports.put = function(req, res) {
    const { id } = req.body

    let index = 0 

    const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
        if (id == teacher.id) {
            index = foundIndex
            return true
        }
    })

    if(!foundTeacher) return res.send("Instructors not default")

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth)
    }

    data.teachers[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err) return res.send("Write error!")

        return res.redirect(`/teachers/${id}`)
    })
}

// DELETE
exports.delete = function(req, res) {
    const { id } = req

    const filteredTeachers = data.teachers.filter(function(teacher){
        return teacher.id != id
    })
}


    
