/**
 * Creado por Esteban Castañeda: 28/Oct/2017.
 */

 const mongoose = require('mongoose');

 const categoriaplanSchema = mongoose.Schema({
     clavecat: {
         type: String,
         required: true
     },
     nombrecat: {
         type: String,
         required: true
     },
     nivelcat: {
         type: Number,
         required: false
     },
     rutacat: {
         type: String,
         required: true
     },
     ordencat: {
         type: Number,
         required: false
     },
     catpadre: [{type: Schema.ObjectId, ref: 'Categoriaplan'}],
     plan: [{type: Schema.ObjectId, ref: 'Plan'}]
 });

 const categoriaplanModel = mongoose.model('Categoriaplan', categoriaplanSchema, 'categoriaplan');

 module.exports = categoriaplanModel;