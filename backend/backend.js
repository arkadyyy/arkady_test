const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://ec2-18-234-233-0.compute-1.amazonaws.com:3000/",
  })
);

app.get("/", (req, res) => {
  res.status(200).send("hello !");
});

app.listen(9999, () => {
  console.log("server listening on port 9999");
});
