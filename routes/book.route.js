//libraries
import express from "express";

//file imports
import { createBook, deleteBook, getBooks, updateBook } from "../controllers/book.controller.js";

const router = express.Router();
//books routes
router.get("/", getBooks);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
