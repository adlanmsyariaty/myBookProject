const { getDb } = require("../config/mongoConnection");
const { Book } = require("../models/Book");

class BookController {
  static async fetchBook(req, res) {
    try {
      const books = await Book.showAllBook();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error"
      });
    }
  }

  static async addBook(req, res) {
    try {
      const { title, authors, averageRating, imageUrl } = req.body
      const newBook = await Book.create({
        title,
        authors,
        rating: averageRating ? averageRating : 0,
        imageUrl: imageUrl ? imageUrl : "",
      });
      res.status(201).json(newBook);
    } catch (error) {
      if (Array.isArray(error.message)) {
        res.status(400).json({
          message: error.message
        });
      } else {
        res.status(500).json({
          message: "Internal Server Error"
        });
      }
    }
  }
}

module.exports = BookController;
