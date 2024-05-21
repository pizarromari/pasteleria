const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    nombre_porcion: String,
    precio_porcion: Number,
  
});

const userModel = mongoose.model("porcion", schemaData, "porcion");
module.exports = userModel;