import { Router } from "express";

import {
    buscarProdutos,
    buscarProdutoPorIdController,
    salvarProduto
} from "../controllers/produtoController.js";

const router = Router();

router.get("/", buscarProdutos);
router.get("/:id", buscarProdutoPorIdController);
router.post("/", salvarProduto);

export default router;
