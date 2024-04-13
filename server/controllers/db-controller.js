const ConcernModel = require("../models/concern-model");
const statusChange= async (req,res)=>{
  
    try{
      const id = req.query.id;
     
      const response = await ConcernModel.findByIdAndUpdate(id,{status:true});
      if (!response) {
        res.status(404).json({ msg: "No Data Found" });
        return;
      }
      res.status(200).json({ msg: response });
    }catch(e){
      return res.status(500).json({ message: "concern is not delievered" });
    }
  }

  module.exports = statusChange;