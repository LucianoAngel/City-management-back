const Edificacion = require('../models/edificaciones');
const { esquemaEdificacion } = require('../schemas/schemas');

async function buscarEdificacion(req, res) {
  try {
    const valor = await Edificacion.find({});
    if (valor) {
      return res.status(200).send(valor);
    } return res.send(403);
  } catch (error) {
    return res.status(400).send(error);
  }
}

async function crearEdificacion(req, res) {
  try {
    const value = await esquemaEdificacion.validateAsync(req.body);
    if (value) {
      const nuevaEdificacion = new Edificacion(req.body);
      nuevaEdificacion.save();
      res.status(200).send('success');
    }
  } catch (error) {
    res.status(400).send(error);
  }
}

async function eliminarEdificacion(req, res) {
  try {
    const { id } = req.params;
    const edificacion = await Edificacion.findByIdAndDelete(id);
    if (edificacion) {
      res.status(200).send('success');
    } else {
      res.status(404).send('not found');
    }
  } catch (error) {
    res.status(400).send(error);
  }
}
async function actualizarEdificacion(req, res) {
  try {
    const { id } = req.params;
    const {
      nombre, arquitectura, categoria, direccion, dimensionesTerreno, divisiones
    } = req.body;
    const edificacion = await Edificacion.findById(id);
    if (edificacion) {
      Object.assign(edificacion, {
        nombre,
        categoria,
        arquitectura,
        direccion,
        dimensionesTerreno,
        divisiones
      });
      edificacion.save();
      return res.status(200).send('success');
    }
    return res.status(404).send('not found');
  } catch (error) {
    return res.status(400).send(error);
  }
}

module.exports = {
  crearEdificacion,
  eliminarEdificacion,
  actualizarEdificacion,
  buscarEdificacion
};
