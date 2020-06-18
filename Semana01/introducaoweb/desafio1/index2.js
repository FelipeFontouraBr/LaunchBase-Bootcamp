// Crie um programa para calcular a aposentadoria de uma pessoa

const nome = 'Bruna'
const sexo = 'Feminino'
const idade = 48
const contribuicao = 37

const total = idade + contribuicao

// Se a pessoa estiver aposentada:
if ( total >= 85 ) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar`)
}