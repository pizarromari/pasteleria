const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
  
nombre_usuario:String,
password:String,
fecha_creacion:Date,
estado_usuario:String,
tipo_usuario:String,
foto_usuario:String,
nombre:String,
ap_paterno:String,
ap_materno:String,
celular:Number,
direccion:String

});

const userModel = mongoose.model("usuario", schemaData, "usuario");
module.exports = userModel;