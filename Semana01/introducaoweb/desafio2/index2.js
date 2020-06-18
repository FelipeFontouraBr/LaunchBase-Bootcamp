// Vetores e objetos

const usuario = {

    nome: "Carlos",
    idade: 32,
    tecnologias: [
        {
            nome: "C++",
            especialidade: "Desktop"
        },
        {
            nome: "Python",
            especialidade: "Data Science"
        },
        {
            nome: "JavaScript",
            especialidade: "Web/Mobile"
        }
    ]
}

console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${usuario.tecnologias[0].nome} com especialidade em ${usuario.tecnologias[1].especialidade}`)
