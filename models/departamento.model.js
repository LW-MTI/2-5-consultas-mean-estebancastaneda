/**
 * Creado por Esteban Castañeda: 28/Oct/2017.
 */

 const mongoose = require('mongoose');

 const departamentoSchema = mongoose.Schema({
     clavedepto: {
         type: String,
         required: true
     },
     nombredepto:{
         type: String,
         required: true
     },
     dependencia: [{type: Schema.ObjectId, ref: 'Dependencia'}]
 });

 