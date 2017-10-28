/**
 * Creado por Esteban Castañeda: 28/Oct/2017.
 */

 const mongoose = require('mongoose');

 const participacionSchema = mongoose.Schema({
     dependencia: [{type: Schema.ObjectId, ref: 'Dependencia'}],
     categoriaplan: [{type: Schema.ObjectId, ref: 'Categoriaplan'}]
 });

 const participacionModel = mongoose.model('Participacion', participacionSchema, participacion);

 module.exports = participacionModel;