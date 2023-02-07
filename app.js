const express = require("express");
const getQuote = require("./data");
const app = express();
app.use(express.static("./public"));
// app.use(express.urlencoded({ extended: false }));
app.get("/api/quote", (req, res) => {
  const randomQuote = Math.floor(Math.random() * 83) + 1;
  const quoteItem = getQuote[randomQuote];
  res.status(200).json(quoteItem);
});
app.listen(3000, console.log(`server is listening on port 3000`));
