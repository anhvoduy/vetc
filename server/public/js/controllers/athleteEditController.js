(function () {
	'use strict';
	app.controller('athleteEditController', athleteEditController);
	athleteEditController.$inject = ['$rootScope', '$scope', '$state', '$stateParams', '$timeout', 'appCommon', 'athleteService'];
	function athleteEditController($rootScope, $scope, $state, $stateParams, $timeout, appCommon, athleteService) {
		// models		
		$scope.athleteKey = $stateParams.athleteKey;
		$scope.master = {}; // https://docs.angularjs.org/guide/forms
		$scope.formStatus = appCommon.isUndefined($scope.athleteKey) ? appCommon.formStatus.isNew : appCommon.formStatus.isEdit;
		$scope.genders = appCommon.genders;
		$scope.messageSuccess;
		$scope.messageError;
		$scope.isSubmitting = false;
		
		// functions
		function setFormTitle(){
			if($scope.formStatus === appCommon.formStatus.isNew) 
				$scope.formTitle = 'Add Athlete';
			else if ($scope.formStatus === appCommon.formStatus.isEdit) 
				$scope.formTitle = 'Edit Athlete';
			else 
				$scope.formTitle = 'Display Athlete';
		};

		function activate() {
			setFormTitle();
			athleteService.getItem($scope.athleteKey).then(function(result){
				$scope.athlete = result;
			}, function(error){
				$scope.messageError = error;
			});
		};

		function validateMaster(master){
			if(!master){
				return false;
			}
			else if(angular.isUndefined(master.FirstName) || formAthlete.FirstName.$invalid){
				return false;
			}
			else if(angular.isUndefined(master.LastName) || formAthlete.LastName.$invalid){
				return false;
			}
			else{
				return true;
			}
		};

		// buttons
		$scope.submit = function (athlete) {
			$scope.master = angular.copy(athlete);
			// validate business rules before submit
			if(!$scope.master || !validateMaster($scope.master)){
				return;
			}
			else if($scope.formStatus === appCommon.formStatus.isNew){
				$scope.isSubmitting = true;
				$scope.messageSuccess = null;
				$scope.messageError = null;
				
				return athleteService.insert($scope.master)
				.then(function(result){
					if(result){
						$scope.messageSuccess = 'Athlete is inserted success.';						
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

				return athleteService.update($scope.master)
				.then(function(result){
					if(result){
						$scope.messageSuccess = 'Athlete is updated success.';						
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