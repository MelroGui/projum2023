const create = (model) => {
    return `INSERT INTO Entregadores VALUES(default, '${model.nome}', '${model.email}', '${model.senha}', '${model.veiculo}')`;
};

const readAll = () => {
    return `SELECT * FROM Entregadores`;
}

const login = (model) => {
    return `SELECT * FROM Entregadores WHERE email = '${model.email}' and senha = '${model.senha}'`;
};

module.exports = {
    create,
    readAll,
    login
}