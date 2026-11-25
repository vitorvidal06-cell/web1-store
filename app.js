import express from "express";
import "dotenv/config";

import produtosRouter from "./src/routes/produtoRoutes.js";

const PORTA = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/produtos", produtosRouter);

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});