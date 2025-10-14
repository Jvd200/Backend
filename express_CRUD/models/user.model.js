const mongoose = require("mongoose"); //hich helps you define schemas and interact with MongoDB
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter user name"],
    },

    email: {
      type: String,
      required: true,
    },
    mobil_No: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, //allows us to have 2 more extra fields created add and updated add
  }
);

const User = mongoose.model("User", UserSchema); //It connects the schema to the "users" collection in MongoDB
module.exports = User; //User model available to other files in your project.
