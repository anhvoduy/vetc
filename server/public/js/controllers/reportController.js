(function () {
	'use strict';
	app.controller('reportController', reportController);
	reportController.$inject = ['$rootScope', '$scope', 'appCommon', 'sensorService', 'athleteService'];
	function reportController($rootScope, $scope, appCommon, sensorService, athleteService) {
		// models		
		$scope.pagination = appCommon.defaultPagination;
		$scope.messageSuccess;
		$scope.messageError;		
		$scope.deviceTypes = appCommon.deviceTypes;
		$scope.athletes = [];
		$scope.reportData = [];
		$scope.currentDate = new Date();
		$scope.query = {
			AthleteId: 1,
			DeviceTypeId: 1,
			AthleteName: 'Daniel Watson',
			Device: 'VivoSmart',
			VitalSignal: 'Heart Rate',
			FromDate: new Date($scope.currentDate.getFullYear(), $scope.currentDate.getMonth(), 1),
			ToDate: new Date($scope.currentDate.getFullYear(), $scope.currentDate.getMonth() + 1, 0)
		};

		// functions
		function activate() {
			athleteService.getList().then(function(result){
				$scope.athletes = result;
			}, function(error){
				console.log(error);
			});
		}

		// buttons
		$scope.search = function (query) {			
			sensorService.getReport(query).then(function(result){
				$scope.reportData = result;
			}, function(error){
				console.log(error);
			})
		}
		
		/* start */
		activate();
	}
})();