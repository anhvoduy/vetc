'use strict';

var app = angular.module('wearableInfoData', [	
	'ngCookies',
	'ui.router',
	'ui.bootstrap',
    'wearableInfoData.common',
	'wearableInfoData.directives'    
]);

app.config(function ($stateProvider) {
	$stateProvider
	.state('/', {
		url: '/',
		views: {
			'view': {
				templateUrl: 'js/views/main.tpl.html',
				controller: 'mainController'
			}
		}
	})
	.state('main', {
		url: '/main',
		views: {
			'view': {
				templateUrl: 'js/views/main.tpl.html',
				controller: 'mainController'
			}
		}
	})	
	.state('dashboard', {
		url: '/dashboard',
		views: {
			'view': {
				templateUrl: 'js/views/dashboard.tpl.html',
				controller: 'dashboardController'
			}
		}
	})	
	.state('device', {
		url: '/device',
		views: {
			'view': {
				templateUrl: 'js/views/device.tpl.html',
				controller: 'deviceController'
			}
		}
	})
	.state('deviceEdit', {		
		url: '/device/:deviceKey',
		parentState: 'device',
		views: {
			'view': {
				templateUrl: 'js/views/deviceEdit.tpl.html',
				controller: 'deviceEditController'
			}
		}
	})
	.state('athlete', {
		url: '/athlete',
		views: {
			'view': {
				templateUrl: 'js/views/athlete.tpl.html',
				controller: 'athleteController'
			}
		}
	})
	.state('athleteEdit', {
		url: '/athlete/:athleteKey',
		parentState: 'athlete',
		views: {
			'view': {
				templateUrl: 'js/views/athleteEdit.tpl.html',
				controller: 'athleteEditController'
			}
		}
	})
	.state('sensor', {
		url: '/sensor',
		views: {
			'view': {
				templateUrl: 'js/views/sensor.tpl.html',
				controller: 'sensorController'
			}
		}
	})
	.state('report', {
		url: '/report',
		views: {
			'view': {
				templateUrl: 'js/views/report.tpl.html',
				controller: 'reportController'
			}
		}
	})
	.state('menu', {
		url: '/menu',
		views: {
			'view': {
				templateUrl: 'js/views/menu.tpl.html',
				controller: 'menuController'
			}
		}
	})
	.state('otherwise', {
		url: '/error',
		views: {
			'view': {
				templateUrl: '/app/views/error.tpl.html'
			}
		}
	});
});