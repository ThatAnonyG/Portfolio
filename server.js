const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const app = express();
app.use(cors());
app.use(json());

app.get("/api/mail", (req, res) => {
  res.redirect(`mailto:me@thatanonymous.me`);
});

app.get("/api/resume", (req, res) => {
  res.download(`${__dirname}/src/assets/Resume.pdf`);
});

app.listen(3000, "localhost", () =>
  console.log("Server started successfully!")
);
