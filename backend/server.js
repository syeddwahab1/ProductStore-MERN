import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoute.js";
import path  from "path";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(express.json()); // used as middleware. allows you to use json data in body
app.use("/api/products", productRoutes);
if (process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
     res.sendFile(path.resolve(__dirname, "frontend","dist","index.html"))
  })
}

app.listen(PORT, () => {
  connectDB();
  console.log("listening on port:",PORT);
});
