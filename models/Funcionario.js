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
        required: true,
        minLength: [14, "Faltam digitos"],
        maxLength: [14, "Digitos demais"],
        match: [/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Formato invalido']
    },
    endereco: {
        type: String,
        maxLength: 200
    },
    sexo: {
        type: String,
        maxLength: 1,
        enum: {
            values: ['F', 'M', 'O'],
            message: '{VALUE} sexo invalido, F=Feminino / M=Masculino / O=Outros'
        }
    },
    telefone: {
        type: String,
        required: true,
        minLength: [15, "Faltam digitos"],
        maxLength: [15, "Digitos demais"],
        match: [/^\(\d{2}\)\d{5}-\d{4}$/, 'Deve ser formatado assim: "(xx)xxxxx-xxxx" ']
    }
})

const Funcionario = mongoose.model('Funcionario', schema)

module.exports = Funcionario