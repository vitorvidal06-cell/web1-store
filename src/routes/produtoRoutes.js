import { Router } from "express";

import {
  buscarProdutos,
  buscarProdutoPorId,
  salvarProduto,
} from "../controllers/produtoController.js";

const router = Router();

router.get("/", buscarProdutos);
router.get("/:id", buscarProdutoPorId);
router.post("/", salvarProduto);

export default router;