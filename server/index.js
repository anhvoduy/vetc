const config = require('./config');
const net = require('./net');
const udp = require('./udp');
const http = require('./http');
const socket = require('./socket');

// socket start
socket.init(http);

// http start
http.listen(config.webPort, () => {
  console.info('HTTP Server start: %j', http.address());
});

// net start
net.listen(config.netPort, () => {
  console.info('TCP Server start: %j', net.address());
});

// udp start
udp.on('listening', () => {
  console.info('UDP Server start: %j', udp.address());
});
udp.bind(config.netPort);