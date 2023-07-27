const express = require("express")
const {getVinyls, postVinyls, putVinyl, deleteVinyl, addVinyl} = require("../controllers/vinyl.controllers")
const {pruebaMiddleware, isAuth, isAdmin} = require("../../middlewares/auth")
const vinylRoutes = express.Router();
const upload = require('../../middlewares/upload')


vinylRoutes.get("/", getVinyls);
vinylRoutes.post("/", isAdmin, upload.fields([{name: "image"}]), postVinyls);
vinylRoutes.put("/:id", isAdmin, putVinyl);
vinylRoutes.delete("/:id", isAdmin, deleteVinyl);

module.exports = vinylRoutes;