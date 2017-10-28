/**
 * Creado por Esteban Castañeda: 28/Oct/2017.
 */

 const mongoose = require('mongoose');

 const usuarioSchema = mongoose.Schema({
     usuario: {type: String, required: true},
     contrasena: {type: String, required: true},
     empleado: [{type: Schema.ObjectId, ref: 'Empleado'}]
 });

 const usuarioModel = mongoose.model('Usuario', usuarioSchema, 'usuario');

 module.exports = usuarioModel;