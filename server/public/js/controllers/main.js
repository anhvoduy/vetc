(function () {
    'use strict';
    //angular.module('appController', ['ngSanitize'])
    app.controller('mainController', ['$rootScope', '$scope', '$http', 'socket', 'Device', '$interval', function($rootScope, $scope, $http, socket, Device, $interval) {

        $scope.deviceList = {};
        var LENGTH_OF_DATA_IN_MSG;
        var SYNC = "";
        var MSG_LENGTH = "";
        var MSG_ID = "";        
        var CHANNEL_NUM = ''; // missing
        var DEVICE_TYPE = ''; // missing
        var DEVICE_TRANS_TYPE = ''; // missing
        var DEVICE_NUM = ''; // missing
        var RECEIVE_SIGNAL_STRENGTH_INDICATION = ''; // missing
        var HEAR_BEAT_COUNT = ''; // missing
        var BEAT_PER_MINUTE = ''; // missing
        var LAST_VALID_HEART_EVENT = "";
        var BPM_BASE_ON_HEART_EVENT = "";
        var HBET_A = -1;
        var HBET_B = -1;
        var toggleBitNum = 0;


        socket.on('wasp', function(message) {

            if (message instanceof ArrayBuffer) {
                var data = new Uint8Array(message);
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
                    if ($scope.deviceList[DEVICE_NUM] === undefined) {
                        var device = new Device();
                        device.DeviceId = DEVICE_NUM;
                        device.MsgLen = data.length;
                        device.ChanNum = CHANNEL_NUM;
                        device.DeviceType = DEVICE_TYPE;
                        device.Signal = RECEIVE_SIGNAL_STRENGTH_INDICATION;
                        device.BPM = BEAT_PER_MINUTE;
                        $scope.deviceList[DEVICE_NUM] = device;
                        device.startInterval(device);
                    } else {
                        var device = $scope.deviceList[DEVICE_NUM];
                        device.DeviceId = DEVICE_NUM;
                        device.MsgLen = data.length;
                        device.ChanNum = CHANNEL_NUM;
                        device.DeviceType = DEVICE_TYPE;
                        device.Signal = RECEIVE_SIGNAL_STRENGTH_INDICATION;
                        device.BPM = BEAT_PER_MINUTE;
                        device.startInterval(device);
                    }
                    if (BEAT_PER_MINUTE == 0 || BEAT_PER_MINUTE == 255) {
                        device.resetValue();
                        device.drawHRChart(true);
                    }

                }
            }
        });
    }]);
})();