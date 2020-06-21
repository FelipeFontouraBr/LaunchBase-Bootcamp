// Soma de despesas e receitas
// Outra solução

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

// Calcular a soma de receitas de usuários

// Calcular a soma de despesas de usuários

// Retornar saldo receitas - despesas

// Função Calcula Saldo recebe como parametro receitas e despesas do USUARIO
// receitas é um array / despesas é um array
function calculaSaldo(receitas, despesas) {

// Preciso usar a função somaNumeros()
const resultado = somaNumeros(numeros)

let somaReceitas = 0;

  // Deve retornar receita - despesas
}

// numeros é uma array
function somaNumeros(numeros) {
  // Soma todos números dentro do array "numeros"
  let soma = 0;
  for(let numero of numeros) {
    soma += numero
  }
  // Retorna a soma dos numeros
  return soma
  // Calcular a soma de receita e despesas 
}

// Percorra o Array de Usuarios
for (let usuario of usuarios) {
   // Para cada usuário, chame uma função chamada calculaSaldo
   const saldo  = calculaSaldo(usuario.receitas, usuario.despesas) 
   
   // SE o saldo é POSITIVO ou NEGATIVO:
   const saldoPositivo = saldo >= 0
   if(saldoPositivo) {
     console.log(`${usuario} possui saldo POSITIVO de ${saldo}`)
   } else {
     console.log(`${usuario} possui saldo NEGATIVO de ${saldo}`) // Negativo
   }
}