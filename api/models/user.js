const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const findOrCreate = require("mongoose-findorcreate");


const UserSchema = new Schema({
  name: { type: "String", required: true },
  lastName: { type: "String" },
  email: { type: "String", required: true },
  password: { type: "String", required: true },
  createdOn: { type: Date, default: new Date().getTime() }, //Si no funciona cambiar a createdOn: { type: Date, default: () => new Date() }
  salt: { type: "String" },
});

UserSchema.methods.hash = (password, salt) => {
  return bcrypt.hash(password, salt);
};

UserSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.pre("save", async function (next) {
  if (this.password) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
  next();
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", UserSchema);
