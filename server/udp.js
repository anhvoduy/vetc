const Q = require('q');
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const socket = require('./socket');
const sensorService = require('./services/sensorService');

server.on('error', (err) => {
  console.error(`server error:\n${err.stack}`);
  server.close();
});

// listen data
server.on('message', Q.async(function* (data, conn) {
    console.info('UDP data from %j: %j', conn, data);
    
    // insert to MySql
    yield sensorService.insert(conn, data);
    
    // forward to client by websocket
    return socket.broadcast('wasp', data);        
}));

module.exports = server;
