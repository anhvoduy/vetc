(function () {
	'use strict';
	app.controller('athleteController', athleteController);
	athleteController.$inject = ['$rootScope', '$scope', 'appCommon', 'athleteService'];
	function athleteController($rootScope, $scope, appCommon, athleteService) {
		// models
		$scope.pagination = appCommon.defaultPagination;
		$scope.messageSuccess = [];
		$scope.messageError = [];
		
		// functions
		function setFormTitle(){
			if($scope.formStatus === appCommon.formStatus.isNew) return 'Add Athlete';
			else if ($scope.formStatus === appCommon.formStatus.isEdit) return 'Edit Athlete';
			else return 'Display Athlete';
		};

		function activate() {
			athleteService.getList().then(function(result){
				$scope.athletes = result;
			}, function(error){
				console.log(error);
			});
		}
		
		$scope.athleteActivate = function(athleteKey){			
			console.log('- athleteActivate():',athleteKey);
		}

		$scope.athleteDelete = function(athleteKey){
			athleteService.delete(athleteKey).then(function(result){
				if(result) activate();
			}, function(error){
				$scope.messageError = error;
			});
		}
		
		/* start */
		activate();
	}
})();