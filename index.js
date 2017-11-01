
var entidadesRouter = require('./routers/entidad.router');
// Importar el módulo Express.
var express = require('express');
var bodyParser = require('body-parser');

// Crear una aplicación Express.
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use('/entidades', entidadesRouter);

var server = require('http').Server(app);
const puerto = 3002;

server.listen(puerto);
console.log('Servidor ejecutándose en puerto ' + puerto);
