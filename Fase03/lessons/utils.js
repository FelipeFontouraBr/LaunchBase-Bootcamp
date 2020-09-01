 // Formatando a data
 module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)
    
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
    
        if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
            age = age - 1
        }
    
        return age
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        // Pegar ano, mês e dia
        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2) //Quando tiver um 0 na frente mantem, quando não, retirar o 0
        const day = `0${date.getUTCDate()}`.slice(-2)

        // Return precisa ser dessa forma: yyyy-mm-dd
        return `${year}-${month}-${day}`
    }
 }