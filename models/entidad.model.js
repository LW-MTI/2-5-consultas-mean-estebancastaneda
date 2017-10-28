/**
 * Created by Esteban Castañeda on 27/Oct/17.
 */
const mongoose = require("mongoose");

const entidadSchema = new mongoose.Schema({
    claveent: {
        type : String,
        required : true
    },
    nombreent: {
        type : String,
        required: true
    },
    abrevent: {
        type: String,
        required: true
    }
});

const entidadModel = mongoose.model("Entidad", entidadSchema, "entidad");

module.exports = entidadModel;