const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://mongo:${process.env.PASSWORD}@cluster0.ujxji.mongodb.net/test`;
const client = new MongoClient(uri);

let db
async function connection() {
  try {
    await client.connect()
    db = client.db("my-book-project");
  } catch (error) {
    res.status(500).json({
      message: "Internal server error"
    })
  }
}

function getDb() {
  return db
}

module.exports = {
  connection,
  getDb
}
