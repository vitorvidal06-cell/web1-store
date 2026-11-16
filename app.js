
import express from "express";
import 'dotenv/config';
import { buscarProdutos } from './src/controllers/produtoController.js';
import { buscarProdutoPorId } from './src/repositories/produtoRepository.js';
import produtoRouter from './src/routes/produtoRoutes.js';

const PORTA = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (requisicao, resposta) => {
  resposta.send("Hello World");
});

app.get("/produtos", produtoRouter);

app.get("/produtos/:id", async (req, res) => {
  const id = req.params.id;

  const idConvertido = Number(id);

  if (isNaN(idConvertido)) {
    return res.status(400).json({ erro: "ID inválido." });
  }

  const produto = await buscarProdutoPorId(idConvertido);

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado." });
  }

  res.json(produto);
});

app.listen(PORTA, () => {
  console.log(`Server is running on http://localhost:${PORTA}`);
});
