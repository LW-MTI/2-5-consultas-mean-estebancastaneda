/**
 * Creado por Esteban Castañeda: 28/Oct/2017.
 */

 const mongoose = require('mongoose');

 const empleadoSchema = mongoose.Schema({
     paternoemp: {
         type: String,
         required: true
     },
     maternoemp: {
         type: String,
         required: true
     },
     nombreemp: {
         type: String,
         required: true
     },
     departamento: [{type: Schema.ObjectId, ref: 'Departamento'}]
 });

 const empleadoModel = mongoose.model('Empleado', empleadoSchema, 'empleado');

 module.exports = empleadoModel;