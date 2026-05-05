import { productService } from "../services/product.service.js";

export const productController = {
  addProduct: async (req, res) => {
    const {name, price} = req.body;
    try {
      const response = await productService.addProduct(name, price);
      return {
        success: true,
        message: "Add product successfully",
        status: "203",
        data: {
          product: response,
        }
      }
    } catch (e) {
      return {
        success: false,
        message: "Can not add product",
        status: "500",
        data: {}
      }
    }
  },

  getProducts: async (req, res) => {
    try {
      const response = await productService.getProducts();
      return {
        success: true,
        message: "Get all products successfully",
        status: "200",
        data: {
          products: response
        }
      }
    } catch (e) {
      return {
        success: false,
        message: "Can not get products",
        status: "500",
        data: {},
      };
    }
  }

}