(function () {
    'use strict';
    app.factory('sensorService', sensorService);
    sensorService.$inject = ['$q', 'baseService'];
    function sensorService($q, baseService) {
        // constructor
        var sensorService = function () {            
        }
        sensorService.prototype = new baseService('api/sensor');
        sensorService.prototype.constructor = sensorService;
                
        // methods
        sensorService.prototype.getList = function () {
            var url = String.format('{0}{1}', this.api, '/list');
            
            var q = $q.defer();
            this.getData(url).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;
        }
        
        sensorService.prototype.getItem = function (sensorKey) {
            var url = String.format('{0}{1}', this.api, '/item');
            var params = {
                SensorKey: sensorKey
            }
            
            var q = $q.defer();
            this.getData(url, params).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;
        }

        sensorService.prototype.update = function (sensor) {
            var url = String.format('{0}{1}', this.api, '/update');
            
            var q = $q.defer();
            this.postData(url, sensor).then(function (result) {
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;
        }
        
        var LENGTH_OF_DATA_IN_MSG;
        var SYNC = '';
        var MSG_LENGTH = '';
        var MSG_ID = '';
        var CHANNEL_NUM = '';
        var DEVICE_TYPE = '';
        var DEVICE_TRANS_TYPE = '';
        var DEVICE_NUM = '';
        var RECEIVE_SIGNAL_STRENGTH_INDICATION = '';
        var HEAR_BEAT_COUNT = '';
        var BEAT_PER_MINUTE = '';
        var LAST_VALID_HEART_EVENT = "";
        var BPM_BASE_ON_HEART_EVENT = "";
        var HBET_A = -1;
        var HBET_B = -1;
        var toggleBitNum = 0;

        var formatSocketData = function(item){
            var message = JSON.parse(item.Data);
            var data = message.data;
            var str = "This Garmin device using Legacy Extended Data Message Format";
            str += "Data message length: " + data.length + "<br/>";

            LENGTH_OF_DATA_IN_MSG = data[0] + "";
            MSG_ID = data[1].toString(16);
            CHANNEL_NUM = data[2] + "";
            DEVICE_TYPE = data[18] + "";
            DEVICE_TRANS_TYPE = (data[19] && 0x0f) + "";
            DEVICE_NUM = (((data[19] >> 4) << 16) | (data[17] << 8 | data[16])) + "";
            RECEIVE_SIGNAL_STRENGTH_INDICATION = data[21] + "";
            HEAR_BEAT_COUNT = data[13] + "";
            BEAT_PER_MINUTE = data[14] + "";
            HBET_A = HBET_B;
            HBET_B = (data[12] << 8) | data[11];

            if (HBET_B > HBET_A && HBET_A != -1 && HBET_B != -1) {
                LAST_VALID_HEART_EVENT = HBET_B - HBET_A;
                LAST_VALID_HEART_EVENT = LAST_VALID_HEART_EVENT * 1000 / 1024;
            }
            
            BPM_BASE_ON_HEART_EVENT = 60000 / LAST_VALID_HEART_EVENT + "";
            if (DEVICE_TYPE == "120") {
                //item.DeviceId = DEVICE_NUM;
                item.DeviceNum = DEVICE_NUM;
                item.MsgLen = data.length;
                item.ChanNum = CHANNEL_NUM;
                item.DeviceType = DEVICE_TYPE;
                item.Signal = RECEIVE_SIGNAL_STRENGTH_INDICATION;
                item.BPM = BEAT_PER_MINUTE;

                item.Date = moment(item.Created).format('DD-MMM-YYYY');
                item.Time = moment(item.Created).format('HH:mm:ss');
            }            
        }

        sensorService.prototype.getReport = function (query) {
            var url = String.format('{0}{1}', this.api, '/report');

            var q = $q.defer();
            this.getData(url, query).then(function (result) {
                angular.forEach(result, function(item){
                    item.AthleteName =  query.AthleteName;
                    item.Device = query.Device;
                    item.Vital  =  query.VitalSignal;
                    formatSocketData(item);
                    console.log(item);
                });
                q.resolve(result);
            }, function (error) {
                q.reject(error);
            });
            return q.promise;
        }

        
        // methods
        // reportService.prototype.getList = function () {
        //     var data = [
        //         {
        //             AthleteName: 'Daniel Watson',
        //             Device: 'vivosmart',
        //             Vital: 'Heart Rate',
        //             Date: '27-Sep-2017',
        //             Time: '00:00:00',
        //             Data: 69
        //         },
        //         {
        //             AthleteName: 'Daniel Watson',
        //             Device: 'vivosmart',
        //             Vital: 'Heart Rate',
        //             Date: '27-Sep-2017',
        //             Time: '00:00:16',
        //             Data: 70
        //         },
        //         {
        //             AthleteName: 'Daniel Watson',
        //             Device: 'vivosmart',
        //             Vital: 'Heart Rate',
        //             Date: '27-Sep-2017',
        //             Time: '00:00:22',
        //             Data: 71
        //         },
        //         {
        //             AthleteName: 'Daniel Watson',
        //             Device: 'vivosmart',
        //             Vital: 'Heart Rate',
        //             Date: '27-Sep-2017',
        //             Time: '00:00:25',
        //             Data: 72
        //         },
        //         {
        //             AthleteName: 'Daniel Watson',
        //             Device: 'vivosmart',
        //             Vital: 'Temperature',
        //             Date: '27-Sep-2017',
        //             Time: '00:00:28',
        //             Data: 75
        //         },
        //         {
        //             AthleteName: 'Daniel Watson',
        //             Device: 'vivosmart',
        //             Vital: 'Temperature',
        //             Date: '27-Sep-2017',
        //             Time: '00:00:35',
        //             Data: 77
        //         }
        //     ];
        //     return data;
        // }

        
        // export
        return new sensorService;
    };
})();