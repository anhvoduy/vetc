const SocketIO = require('socket.io');
const debug = require('debug')('app');
/**
 * WebSocket from socket.io
 */
class IOSocket {
  constructor() {
    this.io = null;
  }

  /**
   * init socket io sevvice
   * @param {HTTP} server http server
   */
  init(server) {
    // init io
    this.io = SocketIO(server);
    // allow cros domain
    this.io.set('origins', '*:*');

    this.io.on('connection', (socket) => {
      // login socketID
      debug('socketID %s', socket.id);
      // error handle
      socket.on('error', (err) => {
        debug('socketError %j', err);
      });
      // broadcast test
      // this.broadcast('hiBroadcast', 'hiBroadcast');
    });
  }

  /**
   * broadcast to all cliens
   * @param {String} event event name
   * @param {Any} data object,string,buffer
   */
  broadcast(event, data) {
    debug('Broadcast %s: %j', event, data);
    this.io.sockets.emit(event, data);
  }
}

// export an instance for all module use the same io
module.exports = new IOSocket();
