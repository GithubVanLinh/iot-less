// getting-started.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const controlSchema = new Schema({
  Light: Number, // String is shorthand for {type: String}
  Pan: Number,
});
module.exports = mongoose.model("Control", controlSchema);
