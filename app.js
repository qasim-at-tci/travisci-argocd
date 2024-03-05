const express = require("express");
const logger = require("morgan");

const app = express();

app.use(express.json());
app.use(logger("combined"));

const PORT = 8000;

app.get("/uptime", (req, res) => res.status(200).json({ status: "OK" }));
app.get("/api/v1/hello", (req, res) =>
  res.status(200).json({ info: "Hello, World!" })
);

module.exports = app.listen(PORT, () => console.log("Server Running..."));
