const express = require("express");
const BookController = require("../controllers/bookController")
const router = express.Router();

router.get("/", BookController.fetchBook);
router.post("/", BookController.addBook);

module.exports = router;
