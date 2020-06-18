//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa

const nome = 'Felipe'
const peso = 86
const altura = 1.73
const sexo = 'Masculino'

const imc = peso / (altura * altura);

// Se o imc maior ou igual a 30: Felipe você está acima do peso:
if ( imc >= 30 ) {
    console.log(`${nome} você está acima do peso`)
}

// Se o imc menor que 29.9: Felipe você não está acima do peso:
if ( imc < 29.9 ) {
    console.log(`${nome} você não está acima do peso`)
}

