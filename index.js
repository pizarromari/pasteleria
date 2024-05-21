const express = require('express');
const cors = require('cors');
const mongoose = require('./conexion');

const usuarioRutas = require('./route/usuariologinRuta');
const usuariocrudRutas = require('./route/usuarioRuta');
const rellenoRutas = require('./route/rellenoRuta');
const porcionRutas = require('./route/porcionRuta');
const tortaRutas = require('./route/tortaRuta');
const decoradoRutas = require('./route/decoradoRuta');
const saborRutas = require('./route/saborRuta');
const pedidoRutas = require('./route/pedidoRuta');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Servidor en ejecución en el puerto", PORT);
});

app.use('/usuario', usuarioRutas);
app.use('/usuarioc', usuariocrudRutas);
app.use('/relleno', rellenoRutas);
app.use('/porcion', porcionRutas);
app.use('/torta', tortaRutas);
app.use('/decorado', decoradoRutas);
app.use('/sabor', saborRutas);
app.use('/pedido', pedidoRutas);
