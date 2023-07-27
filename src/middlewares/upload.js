const cloudinary = require("cloudinary").v2;
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const multer = require("multer");


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder: "covers",
        allowedFormats: ["jpg", "jpeg", "png", "svg"],
    },
});

const upload = multer({ storage })
module.exports = upload;