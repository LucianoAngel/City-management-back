const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true
}));

app.use(express.json());

app.use('/api/', api);
app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
