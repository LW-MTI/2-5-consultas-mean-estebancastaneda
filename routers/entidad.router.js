/**
 * Creado por Esteban Castañeda: 30/oct/2017
 */

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
var handler = require('../utils/handler');
const Entidad = require('../models/entidad.model');
 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pmdapp', { useMongoClient: true });

// Insertar entidad. 
router.post('/', function(req, res){
   const entidad = req.body;
   Entidad.create(entidad)
      .then(function(data){
          console.log(data);
          res.json(data);
      })
      .catch(function(error){
          console.log(error);
          res.status(400);
          res.json({ error: error });
      });
});

// Consultar todas las entidades.
router.get('/', function(req, res){
    Entidad
    .find({})
    .sort()
    .exec(handler.handleMany.bind(null, 'entidad', res));
});

// Consultar entidad por _id.
router.get('/id/:id', (req, res)=>{
    var id = req.params.id;
    Entidad
    .find({_id: id})
    .sort()
    .exec(handler.handleOne.bind(null, 'entidad', res));
});

// Consultar entidad por clave (claveent).
router.get('/clave/:claveent', (req, res) =>{
    var claveent = req.params.claveent;
    Entidad
    .find({claveent: claveent})
    .sort()
    .exec(handler.handleOne.bind(null, 'entidad', res));
});

// Consultar entidad por abreviatura (abrevent).
router.get('/abrev/:abrevent', (req, res) =>{
    var abrevent = req.params.abrevent;
    Entidad
    .find({abrevent: abrevent})
    .sort()
    .exec(handler.handleOne.bind(null, 'entidad', res));
});

// Actualizar entidad.
router.put('/', (req, res) => {
   var entidad = req.body;
   Entidad.findByIdAndUpdate(
       entidad._id, 
       {$set: entidad},
       function(err, entidad){
           if(err){
               console.log(err);
               res.status(400);
               res.json({err: err});
           }
           res.json({'msj': 'Entidad actualizada.'});
       }
   );
});

// Eliminar entidad.
router.delete('/:id', (req, res) =>{
    var id = req.params.id;
    Entidad.remove( {_id: id}, function(err, data){
        if(err){
            console.log(err);
            res.status(400);
            res.json( {err: err} );
        }else{
            res.json({msj: 'Documento eliminado correctamente.'});
            console.log('Documento eliminado correctamente.');
        }
    });
});

module.exports = router;
