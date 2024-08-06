// .env
const dotenv = require("dotenv");
dotenv.config();

// require
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/db");

// jwt
const jwt = require('jsonwebtoken');
const { authenticateToken } = require("./utils");

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// First route
app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

// Server
app.listen(3000, () => {});

module.exports = app;
