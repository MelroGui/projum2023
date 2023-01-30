const Tarefa = require('../models/tarefas.model');
const con = require('../dao/ListaTarefa.dao');

const create = (req, res) => {
    con.query(Tarefa.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const update = (req, res) => {
    con.query(Tarefa.update(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else 
                res.status(404).end();
        else 
            res.status(500).json(err).end();
    });
}

const readAll = (req, res) => {
    con.query(Tarefa.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const readStatus = (req, res) => {
    con.query(Tarefa.readStatus(req.params), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    update,
    create,
    readAll,
    readStatus
}