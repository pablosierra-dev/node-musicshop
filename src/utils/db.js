const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const DB_URL= process.env.DB_URL

const connect = async()=> {
    try {
        const db = await mongoose.connect(DB_URL);
        const {name,host} = db.connection;
        
        console.log(`Conectado a ${name} DB en el host : ${host}`);

    } catch (error) {
        console.log(`error conectando la base de datos: ${error}`);
    }
}

module.exports = {connect}  