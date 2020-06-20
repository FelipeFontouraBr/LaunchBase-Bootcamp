// Funções e estruturas de repetição
// Outra solução (Com for...of)

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

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for(let tecnologia of usuario.tecnologias) {
        const encontreiTecnologiaCSS = tecnologia === 'CSS'
        if(encontreiTecnologiaCSS) {
            return true;
        } // Achou um dos usuarios que tem css e é true, acaba a função 'if'     
    }
    return false; //Retorno um falso e terminamos a função geral (Sempre precisamos de um return)
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCss = checaSeUsuarioUsaCSS(usuarios[i]);

    if(usuarioTrabalhaComCss) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
    }
}