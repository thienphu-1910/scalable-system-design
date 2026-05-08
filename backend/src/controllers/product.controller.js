import { productService } from "../services/product.service.js";

export const productController = {
  addProduct: async (req, res) => {
    const { name, description, price } = req.body;
    //const processedBy = req.
    try {
      const response = await productService.addProduct(name, description,price);
      return res.status(203).json({
        success: true,
        message: "Add product successfully",
        status: "203",
        processedBy: req.socket.localPort,
        data: {
          product: response,
        },
      });
    } catch (e) {
      return {
        success: false,
        message: "Can not add product",
        status: "500",
        processedBy: req.socket.localPort,
        data: {},
      };
    }
  },

  getProducts: async (req, res) => {
    try {
      const response = await productService.getProducts();
      return res.status(200).json({
        success: true,
        message: "Get all products successfully",
        status: "200",
        processedBy: req.socket.localPort,
        data: {
          products: response
        }
      })
    } catch (e) {
      return {
        success: false,
        message: "Can not get products",
        status: "500",
        processedBy: req.socket.localPort,
        data: {},
      };
    }
  }

}