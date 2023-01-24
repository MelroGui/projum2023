const Entregador = require('../models/entregador.model');
const con = require('../dao/gestao.dao');

const create = (req, res) => {
    con.query(Entregador.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const login = (req, res) => {
    const user = req.body;

    con.query(Entregador.login(user), (err, result) => {
        if (err == null) {
            if (user.email == result[0].email && user.senha == result[0].senha) {
                if (err == null) {
                    res.status(200).json(result).end();
                } else {
                    res.status(404).json(err).end();
                }
            } else {
                res.status(406).json(err).end();
            }
        } else {
            res.status(400).json(err).end()
        }
    })
}

const readAll = (req, res) => {
    con.query(Entregador.readAll(), (err, result) => {
        if (err == null)
            res.status(200).json(result).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    create,
    login,
    readAll
}