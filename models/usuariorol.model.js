/**
 * Creado por Esteban Castañeda: 28/Oct/2017.
 */

 const mongoose = require('mongoose');

 const usuariorolSchema = mongoose.Schema({
     usuario: [{type: Schema.ObjectId, ref: 'Usuario'}],
     rol: [{type: Schema.ObjectId, ref: 'Rol'}]
 });

 const usuariorolModel = mongoose.model('Usuariorol', usuariorolSchema, 'usuariorol');

 module.exports = usuariorolModel;