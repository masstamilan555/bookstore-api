//libraries import
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//file imports
import dbConnect from "./config/db.js";
import bookRoutes from "./routes/book.route.js"

//environment configuration and database connection
dotenv.config();
dbConnect();

const app = express();

//json parsing
app.use(express.json());

//cross origins
app.use(cors({
  origin: [],
  credentials: true
}));

//api routes
app.use("/books", bookRoutes);

//api alive?
app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: "API is live & ready to roll" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening  on port at http://localhost:${PORT}`);
});