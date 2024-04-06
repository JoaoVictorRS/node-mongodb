const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: [2, "Nome muito curto"],
        maxLength: 50
    },
    preco: {
        type: Number,
        required: true,
        default: 0,
        min: [0, "Valor negativo"],
        match: [/^\d+(\.\d{1,2})?$/, 'Formato invalido']
    },
    tamanho: {
        type: String,
        required: false,
        lowercase: true,
        enum: {
            values: ['grande', 'media', 'pequena'],
            message: '{VALUE} Invalido / Opções: grande, media, pequena'
        }
    },
    tipo: {
        type: String,
        enum: ['Bebidas', 'Pizzas', 'Massas', 'Sobremesa']
    },
    ingredientes: [String]
})

const Produto = mongoose.model('Produto', schema)

module.exports = Produto