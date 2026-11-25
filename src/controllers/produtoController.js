import {
  buscarTodosProdutos,
  buscarPorId,
  cadastrarProduto,
} from "../repositories/produtoRepository.js";

function formatarProduto(produto) {
  if (!produto) return produto;

  return {
    ...produto,
    preco: Number(produto.preco),
  };
}

async function buscarProdutos(req, res) {
  const produtos = await buscarTodosProdutos();

  return res.json(produtos.map(formatarProduto));
}

async function buscarProdutoPorId(req, res) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      erro: "ID inválido.",
    });
  }

  const produto = await buscarPorId(id);

  if (!produto) {
    return res.status(404).json({
      erro: "Produto não encontrado.",
    });
  }

  return res.json(formatarProduto(produto));
}

async function salvarProduto(req, res) {
  const { nome, preco, categoria } = req.body;

  if (
    typeof nome !== "string" ||
    nome.trim() === "" ||
    typeof preco !== "number" ||
    !Number.isFinite(preco) ||
    preco < 0 ||
    typeof categoria !== "string" ||
    categoria.trim() === ""
  ) {
    return res.status(422).json({
      erro: "Dados inválidos!",
    });
  }

  const dadosProduto = {
    nome: nome.trim(),
    preco,
    categoria: categoria.trim(),
  };

  const produtoCriado = await cadastrarProduto(dadosProduto);

  return res.status(201).json(formatarProduto(produtoCriado));
}

export {
  buscarProdutos,
  buscarProdutoPorId,
  salvarProduto,
};