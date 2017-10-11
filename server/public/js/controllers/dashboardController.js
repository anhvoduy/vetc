(function () {
	'use strict';
	app.controller('dashboardController', dashboardController);
	dashboardController.$inject = ['$rootScope', '$scope', 'appCommon'];
	function dashboardController($rootScope, $scope, appCommon) {
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