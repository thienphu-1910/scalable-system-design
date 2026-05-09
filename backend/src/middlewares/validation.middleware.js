import { z } from "zod";

const ProductSchema = z.object({
  name: z.string("Name must be a string").min(1, "Name is required"),
  description: z.string("Description must be a string"),
  price: z.number(),
});

const productValidation = (req, res, next) => {
  const { name, price, description } = req.body;

  const payload = {
    name, price, description
  };

  const result = ProductSchema.safeParse(payload);
  
  if (result.success) {
    req.body = result.data;
    next();
  } else {
    return res.status(400).json({
      status: 400,
      code: "INVALID_NAME",
      error: result.error
    });
  }
}

export { productValidation };