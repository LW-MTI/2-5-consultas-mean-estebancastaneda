/**
 * Creado por Esteban Castañeda: 01/Nov/2017
 */

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
var handler = require('../utils/handler');
const Municipio = require('../models/municipio.model');
 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/pmdapp', { useMongoClient: true });

// Insertar municipio. 
router.post('/', function(req, res){
   const municipio = req.body;
   Municipio.create(municipio)
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

// Consultar todos los municipios.
router.get('/', function(req, res){
    Municipio
    .find({})
    .populate('entidad')
    .sort()
    .exec(handler.handleMany.bind(null, 'municipio', res));
});

// Consultar municipio por _id.
router.get('/id/:id', (req, res)=>{
    var id = req.params.id;
    Municipio
    .find({_id: id})
    .populate('entidad')
    .sort()
    .exec(handler.handleOne.bind(null, 'municipio', res));
});

// Consultar municipio por clave (clavemun).
router.get('/clave/:clavemun', (req, res) =>{
    var clavemun = req.params.clavemun;
    Municipio
    .find({clavemun: clavemun})
    .populate('entidad')
    .sort()
    .exec(handler.handleOne.bind(null, 'municipio', res));
});

// Consultar municipio por nombre (nombremun).
router.get('/nombre/:nombremun', (req, res) =>{
    var nombremun = req.params.nombremun;
    Municipio
    .find({nombremun: nombremun})
    .populate('entidad')
    .sort()
    .exec(handler.handleOne.bind(null, 'municipio', res));
});

// Actualizar municipio.
router.put('/', (req, res) => {
   var municipio = req.body;
   Municipio.findByIdAndUpdate(
       municipio._id, 
       {$set: municipio},
       function(err, municipio){
           if(err){
               console.log(err);
               res.status(400);
               res.json({err: err});
           }
           res.json({'msj': 'Municipio actualizado.'});
       }
   );
});

// Eliminar municipio.
router.delete('/:id', (req, res) =>{
    var id = req.params.id;
    Municipio.remove( {_id: id}, function(err, data){
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
