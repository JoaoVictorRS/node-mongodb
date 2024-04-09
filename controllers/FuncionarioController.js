const Funcionario = require("../models/Funcionario")

const FuncionarioController = {
    getAll: async (req, res) => {
        const filtros = {}
        const campos = Object.keys(Funcionario.schema.paths)

        for(let campo in req.query){
            if(campos.includes(campo)){
                filtros[campo] = {$regex: new RegExp(req.query[campo], 'i')}
            }
        }

        res.json(await Funcionario.find(filtros))
    },
    get: async (req, res) => {
        try {
            res.json(await Funcionario.findById(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado', detalhes: [error] })
        }
    },
    create: async (req, res) => {
        try {
            res.json(await Funcionario.create(req.body))
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    update: async (req, res) => {
        try {
            res.json(await Funcionario.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado', detalhes: [error] })
        }
    },
    delete: async (req, res) => {
        try {
            res.json(await Funcionario.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({ error: 'Registro não encontrado', detalhes: [error] })
        }
    },
}

module.exports = FuncionarioController