import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isPaid:{
    type:Boolean,
    required:true
  }
});

export const BookModel = mongoose.model("Bookstore", bookSchema);

