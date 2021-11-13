const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.status(200).send("hello !");
});

app.listen(9999, () => {
  console.log("server listening on port 9999");
});
