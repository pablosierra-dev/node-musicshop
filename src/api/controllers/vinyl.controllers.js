const Vinyl = require("../models/vinyl.models");
const {deleteFile}  = require("../../middlewares/delete")

const getVinyls = async (req, res) => {
  try {
    const allVinyls = await Vinyl.find();
    return res.status(200).json(allVinyls);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postVinyls = async (req, res) => {
  try {
    const newVinyl = new Vinyl(req.body);
// newVinyl.image = req.files.image[0].path;
    for (let i = 0; i < req.files.image.length; i++) {
        newVinyl.image = [...newVinyl.image, req.files.image[i].path];
      }
    const createdVinyl = await newVinyl.save();
    return res.status(201).json(createdVinyl);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putVinyl = async (req, res) => {
  try {
    const { id } = req.params;
    //  console.log(id);
    const putVinyl = new Vinyl(req.body);
    putVinyl._id = id;
    const updatedVinyl = await Vinyl.findByIdAndUpdate(id, putVinyl, {
      new: true,
    });
    // console.log(updatedComida);
    if (!updatedVinyl) {
      return res.status(404).json({ message: "no existe este id de vinilo" });
    }
    return res.status(200).json(updatedVinyl);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteVinyl = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedVinyl = await Vinyl.findByIdAndDelete(id)
    if (!deletedVinyl) {
        return res.status(404).json({message:"este id no existe"})
    }
    if(deletedVinyl.image.length > 0){
      console.log(deletedVinyl.image);
      for (const eachimg of deletedVinyl.image) {
        deleteFile(eachimg)
      }
    }
    
    return res.status(200).json(deletedVinyl);
  } catch (error) {
    return res.status(500).json(error)
  }
};

module.exports = { getVinyls, postVinyls, putVinyl, deleteVinyl};