const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("hello !");
});

app.listen(9999, () => {
  console.log("server listening on port 9999");
});
