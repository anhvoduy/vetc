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
            SELECT  AthleteId, AthleteKey, FirstName, LastName, DisplayName, 
                    DateOfBirth, Gender, Weight, Height, Description, StatusId
            FROM Athlete
            WHERE StatusId = 2
            ORDER BY AthleteId ASC
            LIMIT :TotalRow
        `;
        return dbContext.queryList(sql, { TotalRow: totalRow });
    }
    catch(err){
        throw err;
    }
});

Factory.prototype.getItem = Q.async(function* (AthleteKey){
    try
    {        
        let sql = `
            SELECT  AthleteId, AthleteKey, FirstName, LastName, DisplayName, 
                    DateOfBirth, Gender, Weight, Height, Description, StatusId
            FROM Athlete
            WHERE AthleteKey = :AthleteKey            
        `;
        return dbContext.queryItem(sql, { AthleteKey: AthleteKey });
    }catch(err){
        throw err;
    }
});

Factory.prototype.create = Q.async(function* (athlete){
    try
    {        
        let sql = `
            INSERT INTO Athlete(AthleteKey, FirstName, LastName, DisplayName, StatusId, Author, Editor)
            VALUES (uuid(), :FirstName, :LastName, :DisplayName, 2, 'SYSTEM', 'SYSTEM')
        `;
        let result = yield dbContext.queryExecute(sql, athlete);        
        return result;
    }
    catch(err){        
        throw err;
    }
});

Factory.prototype.update = Q.async(function* (athlete){
    try
    {        
        let sql = `
            UPDATE Athlete
            SET FirstName =:FirstName , 
                LastName =:LastName, 
                DisplayName =:DisplayName
            WHERE AthleteKey = :AthleteKey 
        `;        
        let result = yield dbContext.queryExecute(sql, athlete);        
        return result;
    }
    catch(err){        
        throw err;
    }
});

Factory.prototype.activate = Q.async(function* (AthleteKey){
    try
    {        
        let sql = `UPDATE Athlete SET StatusId = ${CONSTANT.STATUS.ACTIVE} WHERE AthleteKey =:AthleteKey`;
        let result = yield dbContext.queryExecute(sql, {AthleteKey: AthleteKey});
        return result;
    }
    catch(err){
        throw err;
    }
});

Factory.prototype.inActivate = Q.async(function* (AthleteKey){
    try
    {        
        let sql = `UPDATE Athlete SET StatusId = ${CONSTANT.STATUS.INACTIVE}  WHERE AthleteKey =:AthleteKey`;
        let result = yield dbContext.queryExecute(sql, {AthleteKey: AthleteKey});
        return result;
    }
    catch(err){
        throw err;
    }
});

Factory.prototype.delete = Q.async(function* (AthleteKey){
    try
    {        
        let sql = `UPDATE Athlete SET StatusId = ${CONSTANT.STATUS.DELETED} WHERE AthleteKey =:AthleteKey`;
        let result = yield dbContext.queryExecute(sql, {AthleteKey: AthleteKey});
        return result;
    }
    catch(err){
        throw err;
    }
});

// Export
module.exports = new Factory;