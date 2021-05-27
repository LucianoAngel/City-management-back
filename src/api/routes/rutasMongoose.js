require('../config/dbMongoose');

const express = require('express');

const router = express.Router();

const {
  crearEdificacion,
  eliminarEdificacion,
  actualizarEdificacion,
  buscarEdificacion
} = require('../controllers/funcionalidadMongoose');

// Buscar
router.get('/buscar', buscarEdificacion);
// Crear
router.post('/crear', crearEdificacion);
// Eliminar
router.delete('/eliminar/:id', eliminarEdificacion);
// Actualizar
router.put('/actualizar/:id', actualizarEdificacion);

module.exports = router;
