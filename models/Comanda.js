const mongoose = require('mongoose')

const schema =  mongoose.Schema({
    mesa: String,
    funcionario: Number,
    cliente: String,
    forma_pagamento: String,
    data: {
        type: Date,
        required: true,
        set: (value) => {
            const [dia, mes, ano] = value.split('/')
            return `${ano}-${mes}-${dia}`
        }
    }
})

const Comanda = mongoose.model('Comanda', schema)

module.exports = Comanda