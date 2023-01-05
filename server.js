const express = require("express");
const sassMiddleware = require('./lib/sass-middleware');



const PORT = 8080;

const app = express();


app.set("view engine", "ejs");

app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);

app.get("/",(req,res) => {
  res.render('urls_index');
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});