import { Router } from "express";   
import { buscarProdutos, buscarProdutoPorId } from "../controllers/produtoController.js";

const router = Router();

router.get("/produtos", buscarProdutos);
router.get("/produtos/:id", buscarProdutoPorId);

export default router;