const Shop = require("../models/shop.models");

const getShops = async (req, res) => {
    try {
      // const allRestaurantes = await Restaurante.find().populate("carta");
      const allShops = await Shop.find().populate("products", "title artist genre price");
  
      return res.status(200).json(allShops);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  const postShops = async ( req,res) => {
       try {
          const newShop = new Shop(req.body);
          const createdShop = await newShop.save()
          return res.status(201).json(createdShop) 
       } catch (error) {
          return res.status(500).json(error)
       }
  }
  module.exports = { getShops, postShops};
  