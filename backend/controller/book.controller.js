import { BookModel } from "../models/book.model.js"
export const getBook = async (req, res) => {
        try {
          const books = await BookModel.find({}, "name title price image isPaid"); // ✅ Include "price"
          res.json(books);
        } catch (error) {
          res.status(500).json({ message: "Error fetching books", error });
        }}