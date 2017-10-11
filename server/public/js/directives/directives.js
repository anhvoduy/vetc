(function () {
    angular.module('wearableInfoData.directives', [])
    .directive('numbersOnly', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function (inputValue) {                    
                    if (inputValue == undefined) return '';
                    var transformedInput = inputValue.replace(/[^0-9]/g, '');
                    if (transformedInput != inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }
                    return transformedInput;
                });
            }
        };
    })
    .directive('megaMenu', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: function () {
                return "/js/directives/megaMenu.tpl.html";
            },
            link: function (scope, element, attrs, ngCtrl) {
				//console.log('init mega-menu');
            }
        };
    })
    .directive('ngInputDate', function(){
        return {            
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                name:  '@',
                value: '=',
                format: '@',
                required: '@'
            },
            template: function() {
                var template = 
                '<p class="input-group">' + 
                    '<input type="text" class="form-control" uib-datepicker-popup="{{format}}" ng-model="dtValue" ng-change="changeSelectedDate()" is-open="popup.opened" datepicker-options="dateOptions" ng-required="true" close-text="Close" alt-input-formats="altInputFormats" />' +
                    '<span class="input-group-btn">' +
                        '<button type="button" class="btn btn-default" ng-click="openDate()"><i class="glyphicon glyphicon-calendar"></i></button>' +
                    '</span>'
                '</p>';
                return template;
            },
            link: function (scope, element, attrs, modelCtrl) {
                scope.dtValue = scope.value;
                scope.popup = {
                    opened: false
                };
                scope.openDate = function(){
                    scope.popup.opened = true;
                };
                scope.changeSelectedDate = function(){
                    scope.value = new Date(moment(scope.dtValue).toISOString().substring(0, 10));
                }
                scope.$watch('value', function(newVal, oldVal) {
                    if(oldVal != newVal){
                        scope.dtValue = new Date(moment(newVal).toISOString().substring(0, 10));
                    }
                });
            }
        };
    })    
})();