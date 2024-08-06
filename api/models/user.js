const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: "String" },
  email: { type: "String" },
  password: { type: "String" },
  createdOn: { type: Date, default: new Date().getTime() }, //Si no funciona cambiar a createdOn: { type: Date, default: () => new Date() }
});

module.exports = mongoose.model("User", userSchema);