/**
 * Created by Esteban Castañeda on 27/Oct/17.
 */
const mongoose = require("mongoose");

const administracionSchema = mongoose.Schema({
    claveadmon: {
        type: String, 
        required: true
    },
    nombreadmon: {
        type: String,
        required: true
    },
    fechaini: {
        type: Date,
        required: true
    },
    fechafin: {
        type: Date,
        required: true
    },
    municipio: [{type: Schema.ObjectId, ref: "Municipio"}]
});

const administracionModel = mongoose.model("Administracion", administracionSchema, "administracion");

module.exports = administracionModel;