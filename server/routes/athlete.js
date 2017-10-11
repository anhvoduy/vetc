const express = require('express');
const router = express.Router();
const _ = require('lodash');
const Q = require('q');
const athleteService = require('../services/athleteService');

router.get('/list', Q.async(function* (req, res, next) {
	try
	{
		let athletes = yield athleteService.getList();
		res.status(200).json(athletes);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}
}));

router.get('/item', Q.async(function* (req, res, next) {
	try
	{
		let query = _.pick(req.query, ['AthleteKey']);
		let athlete = yield athleteService.getItem(query.AthleteKey);		
		res.status(200).json(athlete);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}
}));

router.post('/insert', Q.async(function* (req, res, next) {
	try
	{
		let athlete = _.pick(req.body, ['FirstName', 'LastName', 'DisplayName', 'DateOfBirth', 'Gender', 'Weight', 'Height', 'Description']);

		// validate business logic
		if(!athlete) 
			throw errorHelper.ERROR_INVALID_ATHLETE;

		if(!athlete.FirstName)
			throw errorHelper.ERROR_INVALID_ATHLETE_FIRST_NAME;

		if(!athlete.LastName)
			throw errorHelper.ERROR_INVALID_ATHLETE_LAST_NAME;

		if(!athlete.DateOfBirth)
			throw errorHelper.ERROR_INVALID_ATHLETE_DATE_OF_BIRTH;
			
		
		// execute command
		athlete.DisplayName = athlete.FirstName + ' ' + athlete.LastName;
		let data = yield athleteService.create(athlete);
		let result = (data.affectedRows > 0) ? true: false;
		res.status(200).json(result);		
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	};
}));

router.post('/update', Q.async(function* (req, res, next) {
	try
	{
		let athlete = _.pick(req.body, ['AthleteKey', 'FirstName', 'LastName', 'DisplayName', 'DateOfBirth', 'Gender', 'Weight', 'Height', 'Description']);

		// validate business logic
		if(!athlete) 
			throw errorHelper.ERROR_INVALID_ATHLETE;

		if(!athlete.AthleteKey)
			throw errorHelper.ERROR_INVALID_ATHLETE_ATHLETE_KEY;

		if(!athlete.FirstName)
			throw errorHelper.ERROR_INVALID_ATHLETE_FIRST_NAME;

		if(!athlete.LastName)
			throw errorHelper.ERROR_INVALID_ATHLETE_LAST_NAME;

		if(!athlete.DateOfBirth)
			throw errorHelper.ERROR_INVALID_ATHLETE_DATE_OF_BIRTH;

		
		// execute command
		athlete.DisplayName = athlete.FirstName + ' ' + athlete.LastName;
		let data = yield athleteService.update(athlete);
		let result = (data.affectedRows > 0) ? true: false;
		res.status(200).json(result);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	};
}));

// TO DO REVIEW: logic activate/inactivate
router.post('/activate', Q.async(function* (req, res, next) {
	try
	{		
		res.status(200).json(true);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}
}));

// TO DO REVIEW: logic activate/inactivate
// router.post('/inActivate', Q.async(function* (req, res, next) {
// 	try
// 	{		
// 		res.status(200).json(true);
// 	}
//	catch(err){
// 		res.status(500).json(err);
// 		next(err);
// 	}
// });

router.post('/delete', Q.async(function* (req, res, next) {
	try
	{		
		let athlete = _.pick(req.body, ['AthleteKey']);
		
		// validate business logic
		if(!athlete.AthleteKey)
			throw errorHelper.ERROR_INVALID_ATHLETE_KEY;

		// AthleteKey must existed
		// if(athlete.AthleteKey){
		//  throw errorHelper.ERROR_INVALID_ATHLETE_KEY;		
		// }

		// execute command		
		let data = yield athleteService.delete(athlete.AthleteKey);
		let result = (data.affectedRows > 0) ? true: false;
		res.status(200).json(result);
	}
	catch(err){
		res.status(500).json(err);
		next(err);
	}
}));

module.exports = router;