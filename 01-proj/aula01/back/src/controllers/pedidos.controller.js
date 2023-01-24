const Pedidos = require('../models/pedidos.model'); 
const con = require('../dao/gestao.dao');

const create = (req, res) => {
    con.query(Pedidos.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const updateEntrega = (req, res) => {
    con.query(Pedidos.updateE(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const updateFim = (req, res) => {
    con.query(Pedidos.updateF(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const readAll = (req, res) => {
    con.query(Pedidos.readAll(), (err, result) => {
        if (err == null)
            res.status(200).json(result).end();
        else
            res.status(400).json(err).end();
    });
}

const del = (req, res) => {
    con.query(Pedidos.del(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    updateEntrega,
    updateFim,
    create,
    readAll,
    del
}