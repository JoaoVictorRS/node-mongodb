const mongoose = require('mongoose')

const schema =  mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: [2, "Nome muito curto"],
        maxLength: [45, "Nome muito longo"]
    },
    cpf: {
        type: String,
        minLength: [14, "Faltam digitos"],
        maxLength: [14, "Digitos demais"],
        match: [/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Formato invalido']
    },
    telefone: {
        type: String,
        minLength: [15, "Faltam digitos"],
        maxLength: [15, "Digitos demais"],
        match: [/^\(\d{2}\)\d{5}-\d{4}$/, 'Deve ser formatado assim: "(xx)xxxxx-xxxx" ']
    },
    email: {
        type: String,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email invalido']
    }
})

const Cliente = mongoose.model('Cliente', schema)

module.exports = Cliente