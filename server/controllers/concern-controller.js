const ConcernModel = require("../models/concern-model");

const concernForm = async (req, res) => {
  try {
    const response = req.body;
    await ConcernModel.create(response);
    return res.status(200).json({ message: "concern send successfully" });
  } catch (error) {
    return res.status(500).json({ message: "concern is not delievered" });
  }
};

module.exports = concernForm;
