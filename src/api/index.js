const express = require('express');

const rutas = require('./routes/rutasMongoose');

const router = express.Router();

router.use('/', rutas);

module.exports = router;
