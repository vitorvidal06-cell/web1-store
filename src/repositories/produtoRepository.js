
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const arquivo = path.resolve(__dirname, "../database/db.json");

async function buscarTodosProdutos() {
    const conteudo = await readFile(arquivo);

    return JSON.parse(conteudo);
}

async function buscarProdutoPorId(id) {
    const produtos = await buscarTodosProdutos();
    return produtos.find(p => p.id === id);
}

async function cadastrarProduto(dadosProduto) {
    const produtos = await buscarTodosProdutos();

    let novoID = 1;

    if (produtos.length > 0) {
        novoID = Math.max(...produtos.map(p => p.id)) + 1;
    }

    const novoProduto = { ...dadosProduto, id: novoID };
    produtos.push(novoProduto);

    await writeFile(arquivo, JSON.stringify(produtos, null, 2), "utf-8");
    return novoProduto;
}

export {
    buscarTodosProdutos,
    buscarProdutoPorId,
    cadastrarProduto,
};
