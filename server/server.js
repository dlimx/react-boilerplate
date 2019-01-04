const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// server routes
const routes = require('./routes/index');

// server variables
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// express server
const server = express();

function requireHTTPS(req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(301, `https://${req.get('host')}${req.url}`);
  }
  next();
}

// add middleware
server.use(morgan(IS_PRODUCTION ? 'combined' : 'dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

// add routes
server.use('/api', routes);
server.use(
  '/',
  express.static(path.join(__dirname, '..', 'dist'), { maxAge: 86400000 }),
);
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

// production only environment
if (IS_PRODUCTION) {
  server.use(requireHTTPS);
  server.use(compression());
}

module.exports = server;
