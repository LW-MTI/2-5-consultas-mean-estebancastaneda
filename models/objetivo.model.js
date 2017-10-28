/**
 * Creado por Esteban Castañeda: 28/Oct/2017.
 */

 const mongoose = require('mongoose');

 const objetivoSchema = mongoose.Schema({
     claveobjetivo: { type: String, required: true },
     objetivo: { type: String, required: true },
     categoriaplan: [{ type: Schema.ObjectId, ref: 'Categoriaplan'} ]
 });

 const objetivoModel = mongoose.model('Objetivo', objetivoSchema, 'objetivo');

 module.exports = objetivoModel;