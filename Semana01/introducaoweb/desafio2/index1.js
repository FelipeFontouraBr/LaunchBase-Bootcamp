// Construção e impressão de objetos

const empresa = {
    nome: "Rocketseat",
    cor: "roxo",
    foco: "Programação",
    endereço: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`)