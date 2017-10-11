'use strict';

// start service
require('../index');

const Promise = require('bluebird');
const fs = require('fs');
exports.config = require('../config');
this.config.host = 'localhost';

this.config.url = 'http://' + this.config.host+ ':' + this.config.webPort;
const request = require('request');

const api = {}

api.get = (data) =>{
  return new Promise((resolve, reject)=>{
     request({
       method: 'GET',
       uri: this.config.url + data.path
     }, (err, res, body) => {
        if(err){
          return reject(err)
        }

        return resolve(res)
      });
  })
};

exports.api = api;

exports.newSocket = () => {
  return require('socket.io-client')(this.config.url);
}
