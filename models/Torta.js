const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    tipo_torta: String,
    precio_torta: Number,
  
});

const userModel = mongoose.model("torta", schemaData, "torta");
module.exports = userModel;