const express = require("express")
const {getShops, postShops} = require("../controllers/shop.controllers")

const shopRoutes = express.Router();
shopRoutes.get("/", getShops);
shopRoutes.post("/", postShops);

module.exports = shopRoutes;