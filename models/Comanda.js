const mongoose = require('mongoose')

const schema = mongoose.Schema({
    mesa: {
        type: String,
        required: true,
        maxLength: 45
    },
    data_pagamento: {
        type: Date,
        required: true,
        set: (value) => {
            const [dia, mes, ano] = value.split('/')
            return `${ano}-${mes}-${dia}`
        }
    },
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