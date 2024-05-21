const mongoose = require('mongoose');
//mongoose.connect("mongodb://127.0.0.1:27017/pasteleria_mari").then(() => {
mongoose.connect("mongodb+srv://maria:mar341990@cluster0.tgmr3hv.mongodb.net/pasteles").then(() => {
   
    console.log("Conectado a la base de datos");
}).catch((error) => {
    console.error("Error de conexion a la base de datos:", error);
});

module.exports = mongoose;

