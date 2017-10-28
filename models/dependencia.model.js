/**
 * Creado por Esteban Castañeda: 28/Oct/2017.
 */

 const mongoose = require('mongoose');

 const dependenciaSchema =  mongoose.Schema({
     clavedepe: {
         type: String,
         required: true
     },
     nombredepe: {
         type: String,
         required: true
     }
 });

 const dependenciaModel = mongoose.model('Dependencia', dependenciaSchema, 'dependencia');

 module.exports = dependenciaModel;

