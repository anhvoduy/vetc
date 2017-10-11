(function () {
	'use strict';
	app.controller('deviceEditController', deviceEditController);
	deviceEditController.$inject = ['$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'appCommon', 'deviceService'];
	function deviceEditController($rootScope, $scope, $state, $stateParams, $timeout, appCommon, deviceService) {
		// models
		$scope.deviceKey = $stateParams.deviceKey;
		$scope.master = {}; // https://docs.angularjs.org/guide/forms
		$scope.formStatus = appCommon.isUndefined($scope.deviceKey) ? appCommon.formStatus.isNew : appCommon.formStatus.isEdit;
		$scope.deviceTypes = appCommon.deviceTypes;
		$scope.messageSuccess;
		$scope.messageError;
		$scope.isSubmitting = false;
		
		// functions
		function setFormTitle(){
			if($scope.formStatus === appCommon.formStatus.isNew) 
				$scope.formTitle = 'Add Device';
			else if ($scope.formStatus === appCommon.formStatus.isEdit) 
				$scope.formTitle = 'Edit Device';
			else 
				$scope.formTitle = 'Display Device';
		};

		function activate() {
			setFormTitle();
			deviceService.getItem($scope.deviceKey).then(function(result){
				$scope.device = result;
			}, function(error){
				$scope.messageError = error;
			});
		};

		function validateMaster(master){
			if(!master){
				return false;
			}
			else if(angular.isUndefined(master.DeviceName) || formDevice.DeviceName.$invalid){
				return false;
			}
			else{
				return true;
			}
		};

		// buttons
		$scope.submit = function (device) {
			$scope.master = angular.copy(device);
			
			// validate business rules before submit
			if(!$scope.master || !validateMaster($scope.master)){
				return;
			}
			else if($scope.formStatus === appCommon.formStatus.isNew){
				$scope.isSubmitting = true;
				$scope.messageSuccess = null;
				$scope.messageError = null;
				
				return deviceService.insert($scope.master)
				.then(function(result){
					if(result){
						$scope.messageSuccess = 'Device is inserted success.';						
					}
					$timeout(function(){
						$state.go($state.current.parentState);
					}, 3000);
				}, function(error){				
					$scope.messageError = error;
					$scope.isSubmitting = false;
				});
			}
			else if($scope.formStatus === appCommon.formStatus.isEdit){
				$scope.isSubmitting = true;
				$scope.messageSuccess = null;
				$scope.messageError = null;

				return deviceService.update($scope.master)
				.then(function(result){
					if(result){
						$scope.messageSuccess = 'Device is updated success.';						
					}
					$timeout(function(){
						$state.go($state.current.parentState);
					}, 3000);
				}, function(error){				
					$scope.messageError = error;
					$scope.isSubmitting = false;
				});
			}
		};
			
		$scope.cancel = function() {            
			$state.go($state.current.parentState);
		};
		
		/* start */
		activate();
	}
})();