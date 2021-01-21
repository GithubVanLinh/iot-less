// getting-started.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userStatusSchema = new Schema({
  username: String,
  password: String,
  status: Number,
  id: String,
});

module.exports = mongoose.model("Status", userStatusSchema);
