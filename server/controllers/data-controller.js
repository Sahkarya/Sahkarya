const ConcernModel = require("../models/concern-model");

const Data = async (req, res) => {
  try {
    const response = await ConcernModel.find();
    if (!response) {
      res.status(404).json({ msg: "No Data Found" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`error from the data controller : ${error}`);
  }
};

module.exports = Data;
