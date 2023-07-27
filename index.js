const express = require("express");
const dotenv = require('dotenv').config();
const cors = require('cors');
const cloudinary = require('cloudinary').v2;


const {connect} = require("./src/utils/db")



const vinylRoutes = require("./src/api/routes/vinyl.routes")
const shopRoutes = require("./src/api/routes/shop.routes")
const userRoutes = require("./src/api/routes/user.routes")

const PORT = process.env.PORT;

const app = express();
connect()
app.use(cors());
app.use(express.json())
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
})

app.use("/vinyls", vinylRoutes);
app.use("/shops", shopRoutes);
app.use("/users",userRoutes);

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});



