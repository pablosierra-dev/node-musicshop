const cloudinary = require('cloudinary').v2;

const deleteFile = (url) => {
    const imgSplitted = url.split("/");
    const nameSplitted = imgSplitted[imgSplitted.length -1].split(".");
    const folder = imgSplitted[imgSplitted.length -2];
    const imgToDelete = `${folder}/${nameSplitted[0]}`;
    cloudinary.uploader.destroy(imgToDelete, ()=> {
        console.log("imagen borrada de cloudinary");
    })
};

module.exports = { deleteFile };