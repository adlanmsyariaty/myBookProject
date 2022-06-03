const express = require("express");
const router = express.Router();
const bookRouter = require("./bookRouter");

router.use("/books", bookRouter);

module.exports = router;
