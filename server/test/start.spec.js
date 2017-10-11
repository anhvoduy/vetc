'use strict';

const expect = require('chai').expect;
const helper = require('./helper');


let skClient = helper.newSocket();


skClient.on('error', error => {
  console.error(error)
});

describe('HTTP-WEBSOCKET', () => {
  it('start listen http', done => {
    helper.api
      .get({
        path: '/status'
      })
      .then(result =>{
        expect(result).has.property('statusCode').to.eq(200);
        done();
      })
  });
  
  it('404 http request', done => {
    helper.api
      .get({
        path: '/notfound'
      })
      .then(result => {
        expect(result).has.property('statusCode').to.eq(404);
        done();
      })
  });

  it('start listen socket.io', function (done) {
    this.timeout(2000);
    const socket = helper.newSocket();
    socket.on('error', err => {
      console.error(err);
    });
    // check broadcast
    // let i = 0;
    // socket.on('hiBroadcast', data => {
    //   expect(data).to.eq('hiBroadcast');
    //   if (++i == 1) {
    //     done();
    //   }
    // })

    // connect success
    socket.on('connect', () => {
      done();
    });
  });
});

describe('TCP-UDP TRANSFER', () => {
  it('TCP - socket receive data', function (done) {
    this.timeout = 2000;
    const net = require('net');
    let i = 0;
    skClient.on('wasp', data => {
      // console.log('receive wasp data:"%s" -- %j', data.toString(), data);
      expect(data).to.be.not.null;
      if (++i == 1) {
        done();
      }
    });

    const client = net.connect({
      port: helper.config.netPort,
      host: helper.config.host
    }, function () {
      client.write('send an ant+ message');
      client.end();
    });
  });

  it('UDP - socket receive data', done => {
    const PORT = helper.config.netPort;
    const HOST = helper.config.host;
    const dgram = require('dgram');
    const message = new Buffer('UDP message');
    const client = dgram.createSocket('udp4');

    skClient.on('wasp', data => {
      expect(data).to.be.not.null;
      done();
    });

    client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
      client.close();
    });
  });
});
