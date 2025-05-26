import Book from "../models/book.model.js";

// GET - all the books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json({ status: "ok", books: books });
  } catch (err) {
    res.status(500).json({ status: "fail", error: "Failed to fetch books" });
    console.error(err);
  }
};

// POST - create a new book
export const createBook = async (req, res) => {
  try {
    const { title, author, price, publishedDate } = req.body;
    //check all fields provided
    if (!title || !author || price === undefined || !publishedDate) {
      return res.status(400).json({ status: "fail", error: "All fields (title, author, price, publishedDate) are required" });
    }
    //check for duplicate book
    const existing = await Book.findOne({ title, author });
    if (existing) {
      return res.status(409).json({ error: "Book already exists" });
    }

    //check for valid date
    if (isNaN(Date.parse(publishedDate))) {
      return res.status(400).json({ status: "fail", error: "Invalid publishedDate format" });
    }
    //check for valid price
    if (typeof price !== "number" || price < 0) {
      return res.status(400).json({ status: "fail", error: "Price must be a positive number" });
    }

    const newBook = new Book({ title, author, price, publishedDate });
    await newBook.save();
    res.status(201).json({ status: "ok", newBook: newBook });
  } catch (err) {
    res.status(400).json({ status: "fail", error: "Failed to create book" });
    console.error(err);
  }
};

// PUT - update book details by Id
export const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    //check for valid date
    if (updateData.publishedDate && isNaN(Date.parse(updateData.publishedDate))) {
      return res.status(400).json({ status: "fail", error: "Invalid publishedDate format" });
    }
    //check for valid price
    if (
      updateData.price !== undefined &&
      (typeof updateData.price !== "number" || updateData.price < 0)
    ) {
      return res.status(400).json({ status: "fail", error: "Price must be a positive number" });
    }

    const updatedBook = await Book.findByIdAndUpdate(id, updateData, { new: true });
    res.json({ status: "ok", updatedBook: updatedBook });
  } catch (err) {
    res.status(400).json({ status: "fail", error: "Failed to update book" });
    console.error(err);
  }
};

// DELETE - delete book by Id
export const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);
    res.json({ status: "ok", message: "Book deleted successfully" });
  } catch (err) {
    res.status(400).json({ status: "fail", error: "Failed to delete book" });
    console.error(err);
  }
};
