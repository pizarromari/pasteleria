const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    nombre_decorado: String,
    genero: String,
  
});

const userModel = mongoose.model("decorado", schemaData, "decorado");
module.exports = userModel;