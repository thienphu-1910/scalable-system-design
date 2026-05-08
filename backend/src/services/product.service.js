import { productRepository } from "../repositories/product.repository.js"

export const productService = {
  addProduct: async (name, description, price) => {
    try {
      const response = await productRepository.addProduct(name, description, price);
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