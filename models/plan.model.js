/**
 * Created by Esteban Castañeda on 27/Oct/17.
 */
const mongoose = require("mongoose");

const planSchema = mongoose.Schema({
    claveplan: {
        type: String,
        required: true
    },
    nombreplan: {
        type: String,
        required: true
    },
    administracion: [{type: Schema.ObjectId, ref: 'Administracion'}]
});

const planModel = mongoose.model('Plan', planSchema, 'plan');
module.exports = planModel;