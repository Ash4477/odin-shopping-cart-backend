import express from "express";
import {
  getProduct,
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct, getProductById);
router.post("/", createProduct);
router.patch("/:id", getProduct, updateProduct);
router.delete("/:id", getProduct, deleteProduct);

export default router;
