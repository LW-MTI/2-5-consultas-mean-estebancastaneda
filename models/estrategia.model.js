/**
 * Creado por Esteban Castañeda: 28/Oct/2017.
 */

 const mongoose = require('mongoose');

 const estrategiaSchema = mongoose.Schema({
     claveestrategia: { type: String, required: true },
     estrategia: { type: String, required: true },
     objetivo: [{ type: Schema.ObjectId, ref: 'Objetivo'}]
 });

 const estrategiaModel = mongoose.model('Estrategia', estrategiaSchema, 'estrategia');

 module.exports = estrategiaModel;

 