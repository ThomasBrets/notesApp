const express = require("express");
const app = express();
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
    res.json({data:"hello"})
})

app.listen(3000, () => {

})

module.exports = app
