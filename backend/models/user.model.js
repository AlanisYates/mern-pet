// Require mongoose
const mongoose = require("mongoose");

// Create new user Schema
const Schema = mongoose.Schema;

// Schema Template
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      // Trims whitespace off the end if user forgets to cut it off
      trim: true,
      minlength: 3
    }
  },
  {
      // Auto create timestamps when modified
    timestamps: true
  }
);


const User = mongoose.model("User", userSchema);

// export schema
module.exports = User;