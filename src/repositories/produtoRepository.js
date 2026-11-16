import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const arquivo = path.resolve(__dirname,"../database/db.json");

async function buscarTodosProdutos() {
    const conteudo = await readFile(arquivo);

    return JSON.parse(conteudo);
}
 

async function buscarProdutoPorId(id) {
    const produtos = await buscarTodosProdutos();
    return produtos.find(p => p.id === id);

    const produto = produtos.find((p) => p.id === id);

    return produto;
}
 export {
    buscarTodosProdutos,
    buscarProdutoPorId
};