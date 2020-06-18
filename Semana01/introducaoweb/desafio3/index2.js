// Funções e estruturas de repetição

const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]    
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]
    }
]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com as seguintes tecnologias ${usuario.tecnologias.join(', ')}`)
}

// Busca por tecnologias
function checaSeUsuariosUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == "CSS")
        return true
    }
    return false    
}

// Percorra o array de usuarios, e verificar se cada um trabalha com CSS, se SIM, imprimi em tela as informações do usuário

for (let i = 0; i < usuarios.length; i++) {    
    const usuarioTrabalhaComCss = checaSeUsuariosUsaCSS(usuarios[i])
    if (usuarioTrabalhaComCss) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}