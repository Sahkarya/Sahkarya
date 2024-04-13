const ConcernModel = require("../models/concern-model");

const AdminData = async (req, res) => {
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

const UserData = async (req, res) => {
  const userEmail = req.query.email;
  try {
    const response = await ConcernModel.find({ email: userEmail });
    if (!response) {
      res.status(404).json({ msg: "No Data Found" });
      return;
    }
    return res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`error from the data controller : ${error}`);
  }
};

module.exports = { AdminData, UserData };
