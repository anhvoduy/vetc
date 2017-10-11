const express = require('express');
const router = express.Router();
const _ = require('lodash');

// GET: test api
router.get('/', function (req, res, next) {
    res.json({ message: 'eTransport method GET() is success' });
    console.log('%s %s :: %s', (new Date).toString(), req.method, req.url);	
    next();
});

// POST: test api
router.post('/', function (req, res, next) {
    res.json({ message: 'eTransport method POST() is success' });
    console.log('%s %s :: %s', (new Date).toString(), req.method, req.url);
    next();
});

module.exports = router;