// getting-started.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userStatusSchema = new Schema({
  Status: Number,
  id: String,
});

module.exports = mongoose.model("Status", userStatusSchema);
