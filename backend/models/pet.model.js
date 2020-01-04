// Require mongoose
const mongoose = require("mongoose");

// Create new user Schema
const Schema = mongoose.Schema;

// Schema Template
const petSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    age: { type: Number, required: true },
    date: { type: Date, required: true },
    available: { type: Boolean, required: true},
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
