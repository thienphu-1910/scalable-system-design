import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import { productRouter } from "./routes/product.route.js";
import { masterPool, slavePool } from "./config/db.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());



const PORT1 = Number(process.env.INSTANCE2_PORT) || 5000;
app.listen(PORT1, () => {
  console.log("App is listening to port: ", PORT1);
});

// const PORT2 = Number(process.env.INSTANCE2_PORT) || 5000;
// app.listen(PORT2, () => {
//   console.log("App is listening to port: ", PORT2);
// });

app.use((req, res, next) => {
  const port = req.socket.localPort;
  res.processedBy = `Node port ${port}`; // Gắn vào object response
  next();
});

app.use("/", productRouter);
