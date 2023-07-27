const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vinylSchema = new Schema(
    {
      title:{type:String, required:true},
      artist:{type:String, required:true},
      image:[{type:String, required:false}],
      year:{type:String, required:true},
      genre:{type:String, required:false},
      price:{type:Number, required:true},
      stock:{type:Number, required:false},
      
    },{
      timestamps:true
      // esto nos genera una fecha de creación y modificación automatica de este objeto
    }
)

const Vinyl = mongoose.model("vinyls", vinylSchema)

module.exports = Vinyl;