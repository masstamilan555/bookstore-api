//libraries
import mongoose from "mongoose";

//book schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"] //throw error on invalid price
  },
  publishedDate: {
    type: Date,
    required: true
  }
}, {
  timestamps: true       //to store the stored time
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
