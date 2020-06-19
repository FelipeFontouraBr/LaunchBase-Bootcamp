// Funções e estruturas de repetição
// Outra solução:

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

for (let a = 0; a < usuarios.length; a++) {
    // Carlos trabalha com HTML, CSS
    // Jarmine trabalha com JavaScript, CSS
    // Tuane trabalha com HTML, Node.js

    // a: unica variavel que esta dinamica
    console.log(`${usuarios[a].nome} trabalha com ${usuarios[a].tecnologias}`)
}