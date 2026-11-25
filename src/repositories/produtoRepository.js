import { db } from "../prisma/db.ts";

async function buscarTodosProdutos() {
  return await db.orm.public.Produto.all();
}

async function buscarPorId(id) {
  return await db.orm.public.Produto
    .whereUnique({ id })
    .first();
}

async function cadastrarProduto(dadosProduto) {
  return await db.orm.public.Produto.create({
    nome: dadosProduto.nome,
    preco: Number(dadosProduto.preco).toFixed(2),
    categoria: dadosProduto.categoria,
  });
}

export {
  buscarTodosProdutos,
  buscarPorId,
  cadastrarProduto,
};