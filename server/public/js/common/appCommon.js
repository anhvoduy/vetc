(function () {
    'use strict';    
    angular.module('wearableInfoData.common', []).factory('appCommon', appCommon);
    appCommon.$inject = ['$rootScope', '$cookieStore'];
    function appCommon($rootScope, $cookieStore) {
        // constructor
        var appCommon = function () {
        }
        
        appCommon.prototype = new appCommon();
        appCommon.prototype.constructor = appCommon;
        
        // functions
        appCommon.prototype.isUndefined = function(value){
            if(value === undefined || value === null){
                return true;
            }
            else if(value === 'undefined' || value === 'null' || value === ''){
                return true;
            }
            else{
                return false;
            }
        }

        // CONSTANST
        appCommon.prototype.baseUrl = '/'; // dev local mode
        appCommon.prototype.FORMAT_DATE = 'DD-MMM-YYYY';

        appCommon.prototype.formStatus = {
            isNew: 1,
            isEdit: 2,
            isView: 3
        };

        // constanst on Server Side: CONSTANT.DEVICE_TYPES
        appCommon.prototype.deviceTypes = [
            { DeviceTypeId: 1, DeviceTypeName: 'Heart Rate' },
            { DeviceTypeId: 2, DeviceTypeName: 'Temperature' },
            { DeviceTypeId: 3, DeviceTypeName: 'MO 2' }
        ];

        appCommon.prototype.genders = [
            { GenderId: 0, GenderName: 'Female' },
            { GenderId: 1, GenderName: 'Male' }
        ];

        appCommon.prototype.defaultPagination = {
            hitsTotal: 100,
            pageTotal: 10,
			pageCurrent: 1,
			pageSize: 10,
			maxSize: 5,
			lstPageSize: [10, 50, 100]
        };
        
        return new appCommon;
    };
})();


// override String.format()
(function(){
    'use strict';
    String.format = function() {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i += 1) {
            var reg = new RegExp('\\{' + i + '\\}', 'gm');
            s = s.replace(reg, arguments[i + 1]);
        }
        return s;
    };
})();