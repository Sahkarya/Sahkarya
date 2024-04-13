const { Schema, model } = require("mongoose");

const concernSchema = new Schema({
  email: { type: String, required: true },
  message: { type: String, required: true },
  address: { type: String, required: true },
  department: { type: String, required: true },
  tag: { type: String, required: true },
  image: { type: String },
  date: { type: Date },
});

const ConcernModel = new model("ConcernModel", concernSchema);

module.exports = ConcernModel;
