const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  country: String,
});

const User = new mongoose.model("user2", userSchema);

module.exports = User;
