const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let setor = await prisma.setor.create({
        data: req.body
    });

    res.status(200).json(setor).end();
}

const read = async (req, res) => {
    let setores = await prisma.setor.findMany({
        select: {
            nome: true,
            comissao: true
        }
    });

    //SELECT email, nome FROM setor WHERE email = ''

    res.status(200).json(setores).end();
}

const update = async (req, res) => {
    const setor = await prisma.setor.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(setor).end();
}

module.exports = {
    create,
    read,
    update
}