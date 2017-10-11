const _ = require('lodash');
const Q = require('q');
const moment = require('moment');
const dbContext = require('../lib/dbContext');

// Constructor
const Factory = function(){

}

Factory.prototype.getList = Q.async(function* (){
    try
    {        
        return true;
    }
    catch(err){
        throw err;
    }
});


/* this function: - should parser(data) when make report to Front End */
Factory.prototype.getReport = Q.async(function* (query){
    try
    {
        let totalRow = 5000; // should consider pagination

        // Format Date
        let fromDate = moment(query.FromDate).format('DD-MMM-YYYY');
        let toDate = moment(query.ToDate).format('DD-MMM-YYYY');
        fromDate = (new Date(fromDate)).setHours(0,0,0,0);
        toDate = (new Date(toDate)).setHours(23,59,59,999);
        fromDate = moment(fromDate).format('YYYY-MM-DD HH:mm:ss');
        toDate = moment(toDate).format('YYYY-MM-DD HH:mm:ss');

        // query count
        let sqlCount = `
            SELECT COUNT(*) AS Total
            FROM VivoSmart 
            WHERE Created >= :FromDate AND Created <= :ToDate
            ORDER BY VivoSmartId DESC 
            LIMIT :TotalRow
        `;
        let totalRow = yield dbContext.queryItem(sqlCount, {
            FromDate: fromDate,
            ToDate: toDate
        });

        // query data
        let sql = `
            SELECT * 
            FROM VivoSmart 
            WHERE Created >= :FromDate AND Created <= :ToDate
            ORDER BY VivoSmartId DESC 
            LIMIT :TotalRow
        `;
        let data = yield dbContext.queryList(sql, {
            FromDate: fromDate,
            ToDate: toDate,
            TotalRow: totalRow 
        });
        return data;
    }
    catch(err){
        throw err;
    }
});


/*
    this function only insert raw data that collected from device
    - should parser(data) when make report at Front End
    - should consider records in table: (1 day * 24 hours * 60 mins * 60 seconds * 100 miliseconds) = 8.6 milion rows/1 day
    - should save column: AthleteId for History Report
    - should find a way to seperate: insert(data) & broadcast(data)
    - should compare MySql to other DB types
 */

Factory.prototype.insert = Q.async(function* (conn, data){
    try
    {
        let sql = `INSERT INTO VivoSmart(Connection,Data) VALUES (:Connection,:Data)`;
        let result = yield dbContext.queryExecute(sql, { Connection: JSON.stringify(conn), Data: JSON.stringify(data) });
        return result;
    }
    catch(err){
        throw err;
    }
});


// Export
module.exports = new Factory;

