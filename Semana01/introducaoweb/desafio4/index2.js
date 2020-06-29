// Realizar operações bancárias

const user = {
    name: "Felipe",
    transactions: [],
    balance: 0
}

// Objeto de Transação
const transaction = {
    type: ["credit", "debit"],
    value: 50.5
}

function createTransaction(transaction) {

    const type1 = transaction.type[0]
    const type2 = transaction.type[1]
    const valueTotal = transaction.value
    // Se for credit, somar valor do crédito no saldo(balance)
   if (type1 === "credit") { 
       console.log(type1)     
        type1 += valueTotal;
        user.transactions.push(transaction)
   }
    //Se for debit, subtrair o valor do débito no saldo(balance)
   else {
        type2 = type2 - valueTotal;
   }

   return createTransaction
   console.log(createTransaction)
}

// Executando a função
function createTransaction()

