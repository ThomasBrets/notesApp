const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const generateToken = (payload) => {
  console.log("PAYLOAD", payload);

  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" });
  return token;
};

const valdateToken = (token) => {
    return jwt.verify(token, SECRET)
}