(function () {
	'use strict';
	app.controller('menuController', menuController);
	menuController.$inject = ['$rootScope', '$scope', 'appCommon'];
	function menuController($rootScope, $scope, appCommon) {
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