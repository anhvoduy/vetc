(function () {
	'use strict';
	app.controller('deviceController', deviceController);
	deviceController.$inject = ['$rootScope', '$scope', 'appCommon', 'deviceService'];
	function deviceController($rootScope, $scope, appCommon, deviceService) {
		// models
		$scope.pagination = appCommon.defaultPagination;
		$scope.messageSuccess;
		$scope.messageError;
		
		// functions
		function activate() {
			deviceService.getList().then(function(result){
				$scope.devices = result;
			}, function(error){
				$scope.messageError = error;
			});
		}

		$scope.deviceActivate = function(deviceKey){
			console.log('- deviceActivate():',deviceKey);
		}

		$scope.deviceDelete = function(deviceKey){			
			deviceService.delete(deviceKey).then(function(result){
				if(result) activate();
			}, function(error){
				$scope.messageError = error;
			});
		}
		
		/* start */
		activate();
	}
})();