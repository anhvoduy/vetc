const express = require('express');
const router = express.Router();
const _ = require('lodash');
const Q = require('q');
const constant = require('../lib/constant');
const errorHelper = require('../lib/errorHelper');
const deviceService = require('../services/deviceService');

router.get('/list', Q.async(function* (req, res, next) {
	try
	{
		let devices = yield deviceService.getList();
		res.status(200).json(devices);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}
}));

router.get('/item', Q.async(function* (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['DeviceKey']);
		let device = yield deviceService.getItem(query.DeviceKey);		
		res.status(200).json(device);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}
}));

router.post('/insert', Q.async(function* (req, res, next) {
	try
	{
		let device = _.pick(req.body, ['DeviceNo', 'DeviceName','DeviceTypeId','Sensor','Description']);
		
		// validate business logic
		if(!device) 
			throw errorHelper.ERROR_INVALID_DEVICE;
		
		if(!device.DeviceNo)
			throw errorHelper.ERROR_INVALID_DEVICE_NO;
		
		if(!device.DeviceName)
			throw errorHelper.ERROR_INVALID_DEVICE_NAME;
		
		if(!device.DeviceTypeId)
			throw errorHelper.ERROR_INVALID_DEVICE_TYPE_ID;

		if(!device.Sensor)
			throw errorHelper.ERROR_INVALID_DEVICE_SENSOR;

		// DeviceNo is unique
		if(device.DeviceNo){
			let total = (yield deviceService.checkUniqueDeviceNo(device.DeviceKey, device.DeviceNo)).Total;
			if(total>0)
				throw errorHelper.ERROR_DEVICE_NO_MUST_BE_UNIQUE;
		}

		// execute command		
		let data = yield deviceService.create(device);
		let result = (data.affectedRows > 0) ? true: false;
		res.status(200).json(result);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}    
}));

router.post('/update', Q.async(function* (req, res, next) {
	try
	{
		let device = _.pick(req.body, ['DeviceKey','DeviceNo','DeviceName','DeviceTypeId','Sensor','Description']);

		// validate business logic
		if(!device) 
			throw errorHelper.ERROR_INVALID_DEVICE;

		if(!device.DeviceKey)
			throw errorHelper.ERROR_INVALID_DEVICE_KEY;

		if(!device.DeviceNo)
			throw errorHelper.ERROR_INVALID_DEVICE_NO;

		if(!device.DeviceName)
			throw errorHelper.ERROR_INVALID_DEVICE_NAME;
			
		if(!device.DeviceTypeId)
			throw errorHelper.ERROR_INVALID_DEVICE_TYPE_ID;

		if(!device.Sensor)
			throw errorHelper.ERROR_INVALID_DEVICE_SENSOR;
		
		// DeviceNo must unique
		if(device.DeviceNo){
			let total = (yield deviceService.checkUniqueDeviceNo(device.DeviceKey, device.DeviceNo)).Total;
			if(total > 0)
				throw errorHelper.ERROR_DEVICE_NO_MUST_BE_UNIQUE;
		}

		// DeviceKey must existed
		// if(device.DeviceKey){
		// 	let total = (yield deviceService.checkExistedDeviceKey(device.DeviceKey)).Total;
		// 	if(total == 0)
		// 		throw errorHelper.ERROR_DEVICE_KEY_IS_NOT_EXISTED;
		// }

		// execute command		
		let data = yield deviceService.update(device);
		let result = (data.affectedRows > 0) ? true: false;
		res.status(200).json(result);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}    
}));

router.post('/activate', Q.async(function* (req, res, next) {
	try
	{		
		let device = _.pick(req.body, ['DeviceKey']);
		
		// validate business logic
		if(!device.DeviceKey)
			throw errorHelper.ERROR_INVALID_DEVICE_KEY;

		// DeviceKey must existed
		// if(device.DeviceKey){
		// 	let total = (yield deviceService.checkExistedDeviceKey(device.DeviceKey)).Total;
		// 	if(total == 0)
		// 		throw errorHelper.ERROR_DEVICE_KEY_IS_NOT_EXISTED;
		// }

		// execute command		
		let data = yield deviceService.activate(device.DeviceKey);
		let result = (data.affectedRows > 0) ? true: false;
		res.status(200).json(result);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}
}));

// TO DO REVIEW: logic activate/inactivate
router.post('/inactivate', Q.async(function* (req, res, next) {
	try
	{		
		let device = _.pick(req.body, ['DeviceKey']);
		
		// validate business logic
		if(!device.DeviceKey)
			throw errorHelper.ERROR_INVALID_DEVICE_KEY;

		// DeviceKey must existed
		// if(device.DeviceKey){
		// 	let total = (yield deviceService.checkExistedDeviceKey(device.DeviceKey)).Total;
		// 	if(total == 0)
		// 		throw errorHelper.ERROR_DEVICE_KEY_IS_NOT_EXISTED;
		// }

		// execute command		
		let data = yield deviceService.inActivate(device.DeviceKey);
		let result = (data.affectedRows > 0) ? true: false;
		res.status(200).json(result);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}
}));

router.post('/delete', Q.async(function* (req, res, next) {
	try
	{
		let device = _.pick(req.body, ['DeviceKey']);
		
		// validate business logic
		if(!device.DeviceKey)
			throw errorHelper.ERROR_INVALID_DEVICE_KEY;
		
		// DeviceKey must existed
		// if(device.DeviceKey){
		// 	let total = (yield deviceService.checkExistedDeviceKey(device.DeviceKey)).Total;
		// 	if(total == 0)
		// 		throw errorHelper.ERROR_DEVICE_KEY_IS_NOT_EXISTED;
		// }

		// execute command		
		let data = yield deviceService.delete(device.DeviceKey);
		let result = (data.affectedRows > 0) ? true: false;
		res.status(200).json(result);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}
}));

module.exports = router;