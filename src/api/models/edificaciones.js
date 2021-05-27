const { Schema, model } = require('mongoose');

const edificacionEsquema = new Schema({
  nombre: String,
  categoria: String,
  arquitectura: String,
  dimensionTerreno: Number,
  divisiones: Number,
  direccion: String,
}, { timestamps: true });

module.exports = new model('Edificacion', edificacionEsquema);
