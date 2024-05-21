const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    nombre_relleno: String,
    precio_relleno: Number,
  
});

const userModel = mongoose.model("relleno", schemaData, "relleno");
module.exports = userModel;