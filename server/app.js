if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const cors = require("cors");
const express = require("express");
const { connection } = require("./config/mongoConnection");
const app = express();
const port = process.env.PORT || 3001;
const router = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

connection().then(async () => {
  app.listen(port, () => {
    console.log(`This app listening on port `, port);
  });
});
