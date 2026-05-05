import { productRepository } from "../repositories/product.repository.js"

export const productService = {
  addProduct: async (name, price) => {
    try {
      const response = await productRepository.addProduct(name, price);
      return response;
    } catch (e) {
      throw e;
    }
  }, 
  getProducts: async () => {
    try {
      const response = await productRepository.getProducts();
      return response;
    } catch (e) {
      throw e;
    }
  }
}