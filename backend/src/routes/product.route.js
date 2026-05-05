import express from 'express';
import { productController } from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post('/products', productController.addProduct);

productRouter.get('/products', productController.getProducts);

export { productRouter };