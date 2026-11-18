import { buscarTodosProdutos, buscarProdutoPorId, cadastrarProduto } from '../repositories/produtoRepository.js';

async function buscarProdutos(req, res) {
    const produtos = await buscarTodosProdutos();
    res.json(produtos);
}

async function buscarProdutoPorIdController(req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ erro: "ID inválido." });
    }

    const produto = await buscarProdutoPorId(id);

    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    res.json(produto);
}

async function salvarProduto(req, res) {
    const { nome, preco, categoria } = req.body;

    if (typeof nome !== 'string' || nome.trim() === "" ||
        typeof preco !== 'number' || preco <= 0 ||
        typeof categoria !== 'string' || categoria.trim() === "") {
        return res.status(400).json({ erro: "Dados inválidos!" });
    }

    const dadosProduto = {
        nome: nome.trim(),
        preco,
        categoria: categoria.trim()
    };

    const produtoCriado = await cadastrarProduto(dadosProduto);

    return res.status(201).json(produtoCriado);
}

export {
    buscarProdutos,
    buscarProdutoPorIdController,
    salvarProduto
};
