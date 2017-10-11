const express = require('express');
const router = express.Router();
const _ = require('lodash');
const Q = require('q');
var moment = require('moment');
const sensorService = require('../services/sensorService');

router.get('/list', Q.async(function* (req, res, next) {
	try
	{
		let data = yield sensorService.getList();
		res.status(200).json(data);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}
}));

router.get('/report', Q.async(function* (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['AthleteId', 'DeviceTypeId', 'FromDate', 'ToDate']);
		let data = yield sensorService.getReport(query);
		res.status(200).json(data);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}
}));

module.exports = router;