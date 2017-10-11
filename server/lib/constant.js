/*
200 OK Standard response for successful HTTP requests
201 Created Request has been fulfilled.New resource created
204 No Content Request processed.No content returned
301 Moved Permanently This and all future requests directed to the given URI
304 Not Modified Resource has not been modified since last requested
400 Bad Request Request cannot be fulfilled due to bad syntax
401 Unauthorized Authentication is possible, but has failed
403 Forbidden Server refuses to respond to request
404 Not Found Requested resource could not be found
500 Internal Server Error Generic error message when server fails
501 Not Implemented Server does not recognize method or lacks ability to fulfill
503 Service Unavailable Server is currently unavailable
*/

// Constructor
var CONSTANT = function () { 
}

CONSTANT.secretKey = 'ilovejavascript';

// Success Lists
CONSTANT.SUCCESS_AUTHENTICATION = { code: 'SUCCESS_AUTHENTICATION', message: 'Authentication is success.' };
CONSTANT.SUCCESS_LOGIN = { code: 'SUCCESS_LOGIN', message: 'Login is success.' };
CONSTANT.SUCCESS_LOGOUT = { code: 'SUCCESS_LOGOUT', message: 'Logout is success.' };



// constanst at Client Side: appCommon.deviceTypes
CONSTANT.DEVICE_TYPES = [
    { deviceId: 1, deviceName: 'Heart Rate' },
    { deviceId: 2, deviceName: 'Temperature' },
    { deviceId: 3, deviceName: 'MO 2' }
];

CONSTANT.STATUS = {
    DELETED: 1,
    ACTIVE: 2,
    PENDING: 3,
    INACTIVE: 4,
};

// Export
module.exports = CONSTANT;