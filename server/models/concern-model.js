const { Schema, model } = require("mongoose");

const concernSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  message: { type: String, required: true },
  address: { type: String, required: true },
  department: { type: String, required: true },
});

const ConcernModel = new model("ConcernModel", concernSchema);

module.exports = ConcernModel;
