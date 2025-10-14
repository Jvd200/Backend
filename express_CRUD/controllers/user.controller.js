const User = require("../models/user.model"); //Loads the User model so you can interact with the MongoDB database.

const getusers = async (req, res) => {
  //get all user

  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    //get single user
    const { id } = req.params; //params is used to get id from url
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createUser = async (req, res) => {
  //add user
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "Product not Found" });
    }
    res.status(200).json({ message: "product deleted sucessfuly" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  //Makes all controller functions available to be used in your route file.
  getusers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

/* await:
Pauses the function until the promise is resolved.

It makes asynchronous code look and behave like synchronous code, which is easier to read and debug.*/
//async->It allows you to use await inside that function.
