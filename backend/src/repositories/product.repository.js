import { query } from "../config/db.js";

export const productRepository = {
  addProduct: async (name, description, price) => {
    try {
      return await query(
        "INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING id, name, description, price",
        [name, description, price],
      );
    } catch (e) {
      throw e;
    }
  },

  getProducts: async () => {
    try {
      const result = await query("SELECT id, name, description, price FROM products", []);
      return result?.rows || [];
    } catch (e) {
      throw e;
    }
  },
};
