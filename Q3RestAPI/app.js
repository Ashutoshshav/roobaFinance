const express = require("express");
const app = express();
const User = require("./models/user");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/roobaFinance");
}

main();

app.get("/users", async (req, res) => {
  let usersData = await User.find();
  let userData = [];
  for (let i = 0; i < usersData.length; i++) {
    let data = {
      //for hidding password
      name: usersData[i].name,
      email: usersData[i].email,
      age: usersData[i].age,
      country: usersData[i].country,
    };
    userData[i] = data;
  }
  res.json(userData);
});

app.post("/users", async (req, res) => {
  const { name, email, age, country, password } = req.body;

  const newUser = new User({ name, email, age, country, password });
  await newUser.save();

  res.send("data saved");
});

app.put("/users/:id", async (req, res) => {
  let id = req.params.id;
  const updateData = req.body;
  const updateToData = await User.findByIdAndUpdate(id, updateData);
  console.log(updateToData);
});

app.delete("/users/:id", async (req, res) => {
  let id = req.params.id;
  const deletedData = await User.findByIdAndDelete(id);
  res.json(deletedData);
});

app.listen(port, () => {
  console.log("listen on ", port);
});
