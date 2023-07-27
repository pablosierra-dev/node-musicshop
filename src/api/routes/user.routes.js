const express = require("express");
const {register,login} = require("../controllers/user.controllers")
const userRoutes = express.Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);


module.exports= userRoutes;