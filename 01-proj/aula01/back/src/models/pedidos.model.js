const create = (model) => {
    return `INSERT INTO Pedidos VALUES(default, '${model.cliente}', '${model.endereco}', '${model.produto}', curdate(), curtime(), '${model.hora_entrega}', '${model.hora_fim}', '${model.id_entregador}')`;
};

const readAll = () => {
    return `SELECT * FROM Pedidos`;
}

const del = (model) => {
    return `delete from Pedidos where id_pedido = '${model.id_pedido}'`;
};

const updateE = (model) => {
    return `update Pedidos set hora_entrega = '${model.hora_entrega}' where id_pedido = ${model.id_pedido}`;
};

const updateF = (model) => {
    return `update Pedidos set hora_fim = '${model.hora_fim}' where id_pedido = ${model.id_pedido}`;
};

module.exports = {
    create,
    readAll,
    del,
    updateE,
    updateF
}