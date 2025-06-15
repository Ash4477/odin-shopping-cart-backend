import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productsRouter from "./routes/products.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on port 3000");
});
