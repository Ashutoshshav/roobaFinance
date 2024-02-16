const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");

const port = 3000;

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/roobaFinance");
}

main();

app.get("/aggregation", async (req, res) => {
  try {
    const aggregationData = await User.aggregate([
      {
        $group: {
          _id: null,
          totalUsers: { $sum: 1 },
          averageAge: { $avg: "$age" },
          usersByCountry: {
            $push: {
              country: "$country",
              count: 1,
            },
          },
        },
      },
    ]);
    res.json(aggregationData);
  } catch (e) {
    console.log(e);
  }
});

app.get("*", (req, res) => {
  res.send("For all route");
});

app.listen(port, () => {
  console.log("Listen on ", port);
});
