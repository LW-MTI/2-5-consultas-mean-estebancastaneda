/**
 * Creado por Esteban Castañeda: 28/Oct/2017.
 */

 const mongoose = require('mongoose');

 const rolSchema = mongoose.Schema({
     claverol: {
         type: String,
         required: true
     },
     nombrerol: {
         type: String,
         required: true
     }
 });

 const rolModel = mongoose.model('Rol', rolSchema, 'rol');

 module.exports = rolModel;