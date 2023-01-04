const express = require("express");
const PORT = 8080;

const app = express();

app.set("view engine", "ejs");

app.get("/",(req,res) => {
  res.render('urls_index');
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});