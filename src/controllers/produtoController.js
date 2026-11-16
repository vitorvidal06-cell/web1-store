
import { buscarTodosProdutos, buscarProdutoPorId as buscarProdutoPorIdRepo } from '../repositories/produtoRepository.js';

async function buscarProdutos(req, res) {
    const produtos = await buscarTodosProdutos();
    res.json(produtos);
}

async function buscarProdutoPorId(req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ erro: "ID inválido." });
    }

    const produto = await buscarProdutoPorIdRepo(id);

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    res.json(produto);
}

export {
    buscarProdutos,
    buscarProdutoPorId
};
