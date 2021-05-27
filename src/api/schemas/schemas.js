const Joi = require('@hapi/joi');

// ***VALIDADORES***

const esquemaEdificacion = Joi.object({
  nombre: Joi.string().trim().required(),
  categoria: Joi.string().trim().required(),
  arquitectura: Joi.string().trim(),
  direccion: Joi.string().trim().required(),
  dimensionTerreno: Joi.number(),
  divisiones: Joi.number(),
});

module.exports = { esquemaEdificacion };
