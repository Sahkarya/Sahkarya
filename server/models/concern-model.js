const { Schema, model } = require("mongoose");

const concernSchema = new Schema({
  email: { type: String, required: true },
  message: { type: String, required: true },
  address: { type: String },
  department: { type: String },
  tag: { type: String },
  image: { type: String },
});

const ConcernModel = new model("ConcernModel", concernSchema);

module.exports = ConcernModel;
