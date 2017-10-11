(function () {
	'use strict';
	app.controller('sensorController', sensorController);
	sensorController.$inject = ['$rootScope', '$scope', 'appCommon'];
	function sensorController($rootScope, $scope, appCommon) {
		// models
		$scope.pagination = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		// functions
		function activate() {
			console.log('--- activate().....');
		}
		
		/* start */
		activate();
	}
})();