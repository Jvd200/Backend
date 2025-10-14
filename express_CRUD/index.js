const express = require("express"); //import express, to build the web server
const mongoose = require("mongoose"); //library to interact with MongoDB using JavaScript.
const User = require("./models/user.model"); //import user schema from user module.js, it defines how user data is structured in MongoDB
const userRoute = require("./routes/user.route.js"); //Imports the routes for user-related API endpoints (like create, read, update, delete users)
const app = express(); //Creates an instance of an Express app, to define routes and middleware.

//middle ware
app.use(express.json()); //type of data we can work with
app.use(express.urlencoded({ extended: false })); //type of data we can work with
/*extended: false-> It controls how the URL-encoded data is parsed.
extended: false->Uses the Node.js built-in querystring library to parse data. Only supports simple objects.
extended: true	->Uses the qs library, which allows for rich, nested objects.*/

//routes
app.use("/api/users", userRoute); //Any request starting with /api/users will be handled by the logic inside userRoute.

app.get("/", (req, res) => {
  res.end("hello from nodeJs api server");
});

mongoose
  .connect(
    "mongodb+srv://jvdgowda:YISnPibF7sreTtCl@banckenddb.rfjbbam.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BanckendDB"
  )
  .then(() => {
    console.log("Data Base is connected");
  })
  .catch(() => {
    console.log("connection fail");
  });
app.listen(3000, () => {
  console.log("Server is running on potrt 3000");
});
