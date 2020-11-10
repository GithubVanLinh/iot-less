// getting-started.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const THSchema = new Schema({
  humidity: Number,
  temperature: Number,
  id: String,
  date: Date,
});


module.exports = mongoose.model("TH", THSchema);
