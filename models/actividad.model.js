/**
 * Creado por Esteban Castañeda: 28/Oct/2017.
 */

 const mongoose = require('mongoose');

 const actividadSchema = mongoose.Schema({
     actividad: { type: String, required: true },
     fechaini: { type: Date, required: false },
     fechafin: { type: Date, required: false },
     latitud: { type: Number, required: false },
     longitud: { type: Number, required: false },
     categoriaplan: [{ type: Schema.ObjectId, ref: 'Categoriaplan'} ],
     usuario: [{ type: Schema.ObjectId, ref: 'Usuario'}],
     dependencia: [{ type: Schema.ObjectId, ref: 'Dependencia'}]
 });

 const actividadModel = mongoose.model('Actividad', actividadSchema, 'actividad');

 module.exports = actividadModel;
 