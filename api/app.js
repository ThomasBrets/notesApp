// .env
const dotenv = require("dotenv");
dotenv.config();

// require
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const cookieParser = require('cookie-parser'); // Importar cookie-parser

const routes = require("./routes")



// Middlewares
app.use(express.json());
app.use(cookieParser()); // Usar cookie-parser para manejar cookies
app.use(
  cors({
    origin: "*",
  })
);

// Rutas
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("funciona");
});

// Servidor
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server on ${port}`);
});

module.exports = app;
