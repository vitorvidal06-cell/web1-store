import { readFile } from "node:fs/promises";

import { db } from "./prisma/db.ts";

async function main() {
  const conteudo = await readFile(
    new URL("./database/db.json", import.meta.url),
    "utf-8"
  );

  const produtos = JSON.parse(conteudo);

  for (const produto of produtos) {
    await db.orm.public.Produto.create({
      nome: produto.nome,
      preco: Number(produto.preco).toFixed(2),
      categoria: produto.categoria,
    });
  }

  console.log(`${produtos.length} produtos importados.`);
}

try {
  await main();
} catch (erro) {
  console.error("Erro ao importar produtos:", erro);
  process.exitCode = 1;
} finally {
  await db.close();
}