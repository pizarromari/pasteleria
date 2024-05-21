const mongoose = require('../conexion');
const schemaData = mongoose.Schema({
    fecha_pedido:Date,
    estado_pedido:String,
    foto_pago:String,
    fecha_entrega:Date,
    foto_entrega:String,
    idusuario:{ type: mongoose.Schema.Types.ObjectId, ref: 'usuario' },
    idtorta: { type: mongoose.Schema.Types.ObjectId, ref: 'torta' },
    idrelleno:{ type: mongoose.Schema.Types.ObjectId, ref: 'relleno' },
    idporcion: { type: mongoose.Schema.Types.ObjectId, ref: 'porcion' },
    idsabor: { type: mongoose.Schema.Types.ObjectId, ref: 'sabor' },
    iddecorado: { type: mongoose.Schema.Types.ObjectId, ref: 'decorado' }
    
});

const userModel = mongoose.model("pedido", schemaData, "pedido");
module.exports = userModel;