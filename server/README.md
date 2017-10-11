# Wearable API

- Forward ANT+ data sent by WASP to client by WebSocket.
- WebServer with AngularJs.

# Installing

**OS**: Ubuntu 16.04.2 LTS
**ENV**: 
- node v6
- npm v3.10.10
- pm2 v2.5.0


## Install NodeJs - NPM

Update Ubuntu repository and install NodeJs version 6x
```sh
$ sudo apt-get update
$ curl -sL https://deb.nodesource.com/setup_6.x $ -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt-get install nodejs
$ sudo apt-get install build-essential libudev-dev
```

Check Node version
```sh
$ node -v
```

NPM will install with node as global

Check npm version
```sh
$ npm -v
```

[Reference by digitalocean](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)

## Install PM2

PM2 is a module to run NodeJs process as service. Auto restart when crash or restart server.
[PM2](https://github.com/Unitech/pm2)

```sh
$ sudo npm install pm2 -g
```

## Install dependencies module

Stand at root of wearable directory and install all module
**production**

```sh
$ npm install --production
``` 

**development**
```sh
$ npm install
``` 

# Running

Start service with default setting
`webPort=3000`
`netPort=51113`
```sh
$ pm2 start index.js --name API
```
Config port
```sh
$ webPort=3000 netPort=51113 pm2 start index.js --name API
```

Show process info
```sh
$ pm2 list
```

Save process and run at start up server
```sh
$ pm2 save
$ pm2 startup
```

See API log
```sh
$ pm2 logs API
```
