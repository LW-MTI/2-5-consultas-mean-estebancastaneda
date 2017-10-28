/**
 * Created by Esteban Castañeda on 27/Oct/17.
 */
const mongoose = require("mongoose");

const municipioSchema = mongoose.Schema({
    clavemun: {
        type: String,
        required: true
    },
    nombremun: {
        type: String,
        required: true
    },
    entidad: [{type: Schema.ObjectId, ref: 'Entidad'}]
});

const municipioModel = mongoose.model("Municipio", municipioSchema, "municipio");

module.exports = municipioModel;