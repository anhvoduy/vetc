(function () {
    'use strict';
    //angular.module('appService')
    app.factory('Device', function($rootScope, $interval) {

        var interval = undefined;
        var milliseconds = undefined;
        Device.prototype.drawHRChart = undefined;

        function Device() {
            console.log("init device");
            this.milliseconds = Date.now();
        }

        Device.prototype.resetValue = function() {
            this.DeviceId = "--";
            this.MsgLen = "--";
            this.ChanNum = "--";
            this.DeviceType = "--";
            this.Signal = "--";
            this.BPM = "--";
        }

        Device.prototype.startInterval = function(device) {
            milliseconds = Date.now();
            if (device.drawHRChart) { device.drawHRChart(false); };
            if (angular.isDefined(interval)) return;

            interval = $interval(function() {
                var current = Date.now();
                if (current - milliseconds > 5000) {
                    device.resetValue();
                    device.drawHRChart(true);
                    $interval.cancel(interval);
                    interval = undefined;
                }
            }, 1000);
        }

        Device.prototype.setDirectiveFn = function(directiveFn) {
            Device.prototype.drawHRChart = directiveFn;
        }

        return Device;
    });
})();