const express = require("express");
const path = require("path");

let port = 1128;

const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());


app.listen(port, function () {
  console.log(`listening on port ${port}`);
});