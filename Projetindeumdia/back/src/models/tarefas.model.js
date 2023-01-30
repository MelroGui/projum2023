const create = (model) => {
    return `INSERT INTO tarefas VALUES(default, '${model.descricao}', curtime(), '', '${model.status}')`;
}

const update = (model) => {
    return `UPDATE tarefas set hora_encerramento = curtime(), status = '${model.status}' where id_tarefa = ${model.id_tarefa}`;
}


const readAll = () => {
    return `SELECT * FROM tarefas`;
}

const readStatus = (model) => {
    return `SELECT * FROM tarefas WHERE status = '${model.status}'`;
}

module.exports = {
    update,
    create,
    readAll,
    readStatus
}