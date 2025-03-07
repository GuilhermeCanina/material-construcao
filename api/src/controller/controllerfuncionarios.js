const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const funcionarios = await prisma.funcionarios.findMany();
    return res.json(funcionarios)
}

const create = async (req, res) => {
    const data = req.body;
    const funcionarios = await prisma.funcionarios.create({
        data: data
    });
    return res.status(201).json(funcionarios).end()
}

const update = async (req, res) => {
    const data = req.body;
    let funcionarios = await prisma.funcionarios.update({
        data: data,
        where: {
            id_funcionarios: parseInt(req.body.id_funcionarios)
        }
    })
    return res.status(202).json(funcionarios).end()
}

const del = async (req, res) => {
    const id_funcionarios = parseInt(req.params.id);

    try {
      const funcionarios = await prisma.funcionarios.delete({
        where: {
          id_funcionarios: id_funcionarios,
        },
      });
  
      return res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
  };
  

module.exports = {
    read,
    create,
    update,
    del
}