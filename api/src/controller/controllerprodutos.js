const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    try {
        const produtos = await prisma.produtos.findMany();
        return res.json(produtos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao obter as produto." });
    }
};

const create = async (req, res) => {
    const data = req.body;

    try {
        const produtos = await prisma.produtos.create({
            data: {
                nome: data.nome,
                descricao: data.descricao,
                quantidade: data.quantidade,
                preco_compra: data.preco_compra,
                preco_venda: data.preco_venda,
                fornecedor: data.fornecedor,
                imagemUrl: data.imagemUrl || null,
            }
        });
        return res.status(201).json(produtos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao cadastrar a produto." });
    }
};

const update = async (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;

    try {
        const produtos = await prisma.produtos.update({
            where: { id_produtos: id},
            data: {
                nome: data.nome,
                descricao: data.descricao,
                quantidade: data.quantidade,
                preco_compra: data.preco_compra,
                preco_venda: data.preco_venda,
                fornecedor: data.fornecedor,
                imagemUrl: data.imagemUrl || null,
            }
        });
        return res.status(202).json(produtos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao atualizar a produto." });
    }
};

const del = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        await prisma.produtos.delete({
            where: { id_produtos: id }
        });
        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao excluir a produtos." });
    }
};

module.exports = {
    read,
    create,
    update,
    del
};