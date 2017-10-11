const _ = require('lodash');
const Q = require('q');
const CONSTANT = require('../lib/constant');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function(){
}

Factory.prototype.getList = Q.async(function* (){
    try
    {
        let totalRow = 1000; // backend does not paging
        let sql = `
            SELECT DeviceId, DeviceKey, DeviceNo, DeviceName, DeviceTypeId, Sensor, Description, StatusId
            FROM Device
            WHERE StatusId = 2
            ORDER BY DeviceId ASC
            LIMIT :TotalRow
        `;
        return dbContext.queryList(sql, { TotalRow: totalRow });
    }
    catch(err){
        throw err;
    }
});

Factory.prototype.getItem = Q.async(function* (DeviceKey){
    try
    {        
        let sql = `
            SELECT DeviceId, DeviceKey, DeviceNo, DeviceName, DeviceTypeId, Sensor, Description, StatusId
            FROM Device            
            WHERE DeviceKey = :DeviceKey            
        `;
        return dbContext.queryItem(sql, { DeviceKey: DeviceKey });
    }catch(err){
        throw err;
    }
});

Factory.prototype.create = Q.async(function* (device){
    try
    {        
        let sql = `
            INSERT INTO Device(DeviceKey,DeviceNo,DeviceName,DeviceTypeId,Sensor,Description,StatusId,Author,Editor)
            VALUES (uuid(),:DeviceNo,:DeviceName,:DeviceTypeId,:Sensor,:Description,2,'SYSTEM','SYSTEM'); 
        `;
        let result = yield dbContext.queryExecute(sql, device);        
        return result;
    }
    catch(err){        
        throw err;
    }
});

Factory.prototype.update = Q.async(function* (device){
    try
    {        
        let sql = `
            UPDATE Device
            SET DeviceName =:DeviceName,
                DeviceTypeId =:DeviceTypeId, 
                Sensor =:Sensor, 
                Description =:Description
            WHERE DeviceKey = :DeviceKey
        `;
        let result = yield dbContext.queryExecute(sql, device);        
        return result;
    }
    catch(err){        
        throw err;
    }
});

Factory.prototype.activate = Q.async(function* (DeviceKey){
    try
    {        
        let sql = `UPDATE Device SET StatusId = ${CONSTANT.STATUS.ACTIVE} WHERE DeviceKey =:DeviceKey`;
        let result = yield dbContext.queryExecute(sql, athlete);
        return result;
    }
    catch(err){
        throw err;
    }
});

Factory.prototype.inActivate = Q.async(function* (DeviceKey){
    try
    {        
        let sql = `UPDATE Device SET StatusId = ${CONSTANT.STATUS.INACTIVE} WHERE DeviceKey =:DeviceKey`;
        let result = yield dbContext.queryExecute(sql, athlete);
        return result;
    }
    catch(err){
        throw err;
    }
});

Factory.prototype.delete = Q.async(function* (DeviceKey){
    try
    {        
        let sql = `UPDATE Device SET StatusId = ${CONSTANT.STATUS.DELETED} WHERE DeviceKey =:DeviceKey`;
        let result = yield dbContext.queryExecute(sql, {DeviceKey: DeviceKey});
        return result;
    }
    catch(err){
        throw err;
    }
});

Factory.prototype.checkUniqueDeviceNo = Q.async(function* (DeviceKey, DeviceNo){
    try
    {        
        let sql = `SELECT COUNT(*) AS Total FROM Device WHERE DeviceNo = :DeviceNo AND DeviceKey <> :DeviceKey`;
        let result = yield dbContext.queryItem(sql, {
            DeviceKey: DeviceKey,
            DeviceNo: DeviceNo
        });
        return result;
    }
    catch(err){
        throw err;
    }
});

Factory.prototype.checkExistedDeviceKey = Q.async(function* (DeviceKey){
    try
    {        
        let sql = `SELECT COUNT(*) AS Total FROM Device WHERE DeviceKey =:DeviceKey`;
        let result = yield dbContext.queryItem(sql, { DeviceKey: DeviceKey });
        return result;
    }
    catch(err){
        throw err;
    }
});

// Export
module.exports = new Factory;