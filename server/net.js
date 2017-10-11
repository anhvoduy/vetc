const debug = require('debug')('app');
const socket = require('./socket');

function handleConnection(conn) {
  debug(`TCP connection ${conn.remoteAddress}: ${conn.remotePort}`);

  // listen sent data
  function onConnData(data) {
    console.info(`TCP data from ${conn.remoteAddress}: %j`, data);
    // forward to client by websocket
    socket.broadcast('wasp', data);
    conn.write(data);
  }

  // listen close connection event
  function onConnClose() {
    debug(`End tcp connection: ${conn.remoteAddress}`);
  }

  // listen error from connection
  function onConnError(err) {
    console.error(`Error ${conn.remoteAddress}: ${err.message}`);
  }

  conn.on('data', onConnData);
  conn.once('close', onConnClose);
  conn.on('error', onConnError);
}

const net = require('net');

const server = net.createServer();

server.on('connection', handleConnection);

module.exports = server;
