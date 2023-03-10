const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

const { connection } = require("./Config/db");
const { dataRouter } = require("./Routes/data.route");

const PORT = process.env.port || 7009;

/////
require("dotenv").config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

//running index,js
app.get("/", (req, res) => {
  res.send("hello Backend");
});

app.get("/about", (req, res) => {
  res.send("This data is all about headphoneZone");
});
app.get("/hii", (req, res) => {
  res.send("owner headphoneZone is sohilweb20");
});
app.use("/leads", dataRouter);

//running port
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
    console.log(process.env.name);
    console.log("listening on port 7009");
  } catch (err) {
    console.log("error while connectoing to db");
    console.log(err);
  }
});
