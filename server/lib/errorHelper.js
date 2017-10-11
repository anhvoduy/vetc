// Constructor
const errorHelper = function () { 
}

errorHelper.errorHandler = function (error) {	
    const _error = {
        code: error.code,
        message: error.message,
    }
    //console.log(_error);
	return _error;
}

// Error Lists
errorHelper.ERROR_UNAUTHORIZED = { code: 'ERROR_UNAUTHORIZED', message: 'User is not authorized.' };
errorHelper.ERROR_UNAUTHENTICATION = { code: 'ERROR_UNAUTHENTICATION', message: 'Username and Password is invalid.' };

errorHelper.ERROR_CONNECTION = { code: 'ERROR_CONNECTION', message: 'Current connection is closed or undefined.' };
errorHelper.ERROR_TRANSACTION = { code: 'ERROR_TRANSACTION', message: 'Current transaction is not executed successful.' };

errorHelper.ERROR_INVALID_DEVICE = { code: 'ERROR_INVALID_DEVICE', message: 'Error Invalid Device.' };
errorHelper.ERROR_INVALID_DEVICE_KEY = { code: 'ERROR_INVALID_DEVICE_KEY', message: 'Error Invalid DeviceKey.' };
errorHelper.ERROR_INVALID_DEVICE_NO = { code: 'ERROR_INVALID_DEVICE_NO', message: 'Error Invalid DeviceNo.' };
errorHelper.ERROR_INVALID_DEVICE_NAME = { code: 'ERROR_INVALID_DEVICE_NAME', message: 'Error Invalid DeviceName.' };
errorHelper.ERROR_INVALID_DEVICE_TYPE_ID = { code: 'ERROR_INVALID_DEVICE_TYPE_ID', message: 'Error Invalid DeviceTypeId.' };
errorHelper.ERROR_INVALID_DEVICE_SENSOR = { code: 'ERROR_INVALID_DEVICE_SENSOR', message: 'Error Invalid DeviceSensor.' };

errorHelper.ERROR_DEVICE_NO_MUST_BE_UNIQUE = { code: 'ERROR_DEVICE_NO_MUST_BE_UNIQUE', message: 'Error DeviceNo must be unique.' };
errorHelper.ERROR_DEVICE_KEY_IS_NOT_EXISTED = { code: 'ERROR_DEVICE_KEY_IS_NOT_EXISTED', message: 'Error DeviceKey is not existed.' };


errorHelper.ERROR_INVALID_ATHLETE = { code: 'ERROR_INVALID_ATHLETE', message: 'Error Invalid Athlete.' };
errorHelper.ERROR_INVALID_ATHLETE_KEY = { code: 'ERROR_INVALID_ATHLETE_KEY', message: 'Error Invalid AthleteKey.' };
errorHelper.ERROR_INVALID_ATHLETE_FIRST_NAME = { code: 'ERROR_INVALID_ATHLETE_FIRST_NAME', message: 'Error Invalid Athlete FirstName.' };
errorHelper.ERROR_INVALID_ATHLETE_LAST_NAME = { code: 'ERROR_INVALID_ATHLETE_LAST_NAME', message: 'Error Invalid Athlete LastName.' };
errorHelper.ERROR_INVALID_ATHLETE_DATE_OF_BIRTH = { code: 'ERROR_INVALID_ATHLETE_DATE_OF_BIRTH', message: 'Error Invalid Athlete Date Of Birth.' };

// Export
module.exports = errorHelper;