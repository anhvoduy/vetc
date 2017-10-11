const express = require('express');
const debug = require('debug')('app');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Samples 
function middle(req, res, next) {
  debug('req.headers %j', req.headers);
  next();
}

// app.get('/status', (req, res) => {
//   res.end('ok');
// });

// Register APIs
app.use(middle);
app.use('/api', require('./routes/api'));
app.use('/api/athlete', require('./routes/athlete'));
app.use('/api/device', require('./routes/device'));
app.use('/api/sensor', require('./routes/sensor'));

// Error Handling: middleware to handle error
app.use((err, req, res, next) => {
  console.error('HttpError', err.stack);
  res.status(500).send('Something went wrong!');
  next();
});

// Register Site Collection
app.use(express.static('./public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Export
const http = require('http').Server(app);
module.exports = http;