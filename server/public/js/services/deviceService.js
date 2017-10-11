(function () {
    'use strict';
    app.factory('deviceService', deviceService);
    deviceService.$inject = ['$q', 'baseService'];
    
    function deviceService($q, baseService) {
        // constructor
        var deviceService = function () {            
        }
        deviceService.prototype = new baseService('api/device');
        deviceService.prototype.constructor = deviceService;
                
        // methods
        deviceService.prototype.getList = function (pageCurrent, pageSize) {            
            var url = String.format('{0}{1}', this.api, '/list');
            var params = {
                PageCurrent: pageCurrent,
                PageSize: pageSize
            }

            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                angular.forEach(result, function(item){                    
                });
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        deviceService.prototype.getItem = function (deviceKey) {
            var url = String.format('{0}{1}', this.api, '/item');
            var params = {
                DeviceKey: deviceKey
            };

            var q = $q.defer();        
            this.getData(url, params).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        deviceService.prototype.insert = function (device) {
            var url = String.format('{0}{1}', this.api, '/insert');

            var q = $q.defer();
            this.postData(url, device).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        deviceService.prototype.update = function (device) {
            var url = String.format('{0}{1}', this.api, '/update');

            var q = $q.defer();
            this.postData(url, device).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        deviceService.prototype.delete = function (deviceKey) {
            var url = String.format('{0}{1}', this.api, '/delete');
            var params = {
                DeviceKey: deviceKey
            };

            var q = $q.defer();
            this.postData(url, params).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }
                
        // export
        return new deviceService;
    };
})();