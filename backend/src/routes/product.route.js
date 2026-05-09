import express from 'express';
import { productController } from "../controllers/product.controller.js";
import { productValidation } from '../middlewares/validation.middleware.js';

const productRouter = express.Router();

productRouter.post('/products', productValidation, productController.addProduct);

productRouter.get('/products', productController.getProducts);

export { productRouter };