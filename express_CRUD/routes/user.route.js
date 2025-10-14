const express = require("express"); //Loads the Express framework to define routes.
const User = require("../models/user.model.js"); //Imports the User model so you can interact with the database
const router = express.Router(); // This lets you define routes separately and then plug them into your main app using app.use().
const {
  //imported user from controller
  //functions that handle the logic for each route.
  getusers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");

router.get("/", getusers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
