// Importar módulos requeridos.
var express = require('express');
var bodyParser = require('body-parser');

// Importar los Routers de cada modelo.
var entidadesRouter = require('./routers/entidad.router');
var municipioRouter = require('./routers/municipio.router');

// Crear una aplicación Express.
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

// Inicializar los Routers
app.use('/entidades', entidadesRouter);
app.use('/municipios', municipioRouter);

module.exports = app;