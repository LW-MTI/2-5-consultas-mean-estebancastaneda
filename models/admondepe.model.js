/**
 * Created by Esteban Castañeda on 28/Oct/17.
 */

 const mongoose = require('mongoose');

 var admondepeSchema = mongoose.Schema({
     administracion: [{type: Schema.ObjectId, ref: 'Administracion'}],
     dependencia: [{type: Schema.ObjectId, ref: 'Dependencia'}]
 });

 const admondepeModel = mongoose.model('Admondepe', admondepeSchema, 'admondepe');
 
 module.exports = admondepeModel;