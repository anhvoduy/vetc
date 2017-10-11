(function () {
    'use strict';
    app.factory('athleteService', athleteService);
    athleteService.$inject = ['$q', 'appCommon', 'baseService'];
    
    function athleteService($q, appCommon, baseService) {
        // constructor
        var athleteService = function () {            
        }
        athleteService.prototype = new baseService('api/athlete');
        athleteService.prototype.constructor = athleteService;
                
        // methods
        athleteService.prototype.getList = function (pageCurrent, pageSize) {
            var url = String.format('{0}{1}', this.api, '/list');
            var params = {
                PageCurrent: pageCurrent,
                PageSize: pageSize
            }

            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                angular.forEach(result, function(item){
                    item.DateOfBirth =  moment(item.DateOfBirth).format(appCommon.FORMAT_DATE);
                    item.GenderName = item.Gender === 1? 'Male': 'Female';
                });
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;           
        }
        
        athleteService.prototype.getItem = function (athleteKey) {
            var url = String.format('{0}{1}', this.api, '/item');
            var params = {
                AthleteKey: athleteKey
            };
            
            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        athleteService.prototype.insert = function (athlete) {
            var url = String.format('{0}{1}', this.api, '/insert');

            var q = $q.defer();
            this.postData(url, athlete).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        athleteService.prototype.update = function (athlete) {
            var url = String.format('{0}{1}', this.api, '/update');

            var q = $q.defer();
            this.postData(url, athlete).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            })
            return q.promise;
        }

        athleteService.prototype.delete = function (athleteKey) {
            var url = String.format('{0}{1}', this.api, '/delete');
            var params = {
                AthleteKey: athleteKey
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
        return new athleteService;
    };
})();