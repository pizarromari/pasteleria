const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    nombre_sabor: String,
    descripcion: String,
  
});

const userModel = mongoose.model("sabor", schemaData, "sabor");
module.exports = userModel;