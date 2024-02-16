const express = require("express");
const app = express();

const port = 5000;

//Logger Middileware
app.use((req, res, next) => {
  req.timeStamp = new Date(Date.now()).toString();

  let AccessToken = req.query.AccessToken; //AccessToken passed in query

  console.log(
    `[${req.timeStamp}] ${req.method} : ${req.url}, AccessToken : "${AccessToken}"`
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Root path");
});

app.listen(port, () => {
  console.log("listen on ", port);
});
