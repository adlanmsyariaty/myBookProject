const { ObjectId } = require("mongodb");
const { getDb } = require("../config/mongoConnection");

class Book {
  static books() {
    const database = getDb();
    return database;
  }

  static async showAllBook() {
    try {
      const books = await this.books().collection("books").find().sort({_id: -1}).toArray();
      return books;
    } catch (error) {
      throw error;
    }
  }

  static async create(newData) {
    try {
      const newBook = await this.books().collection("books").insertOne({
        title: newData.title,
        authors: newData.authors,
        rating: newData.rating,
        imageUrl: newData.imageUrl,
      })
      const newBookData = this.findBookById(String(newBook.insertedId))
      return newBookData;
    } catch (error) {
      throw error;
    }
  }

  static async findBookById(id) {
    try {
      if (id.length !== 24) return;
      const book = await this.books().collection("books").findOne({
        _id: new ObjectId(id)
      })
      return book;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  Book,
};
