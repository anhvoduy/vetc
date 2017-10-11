app.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        $rootScope.globals = $cookieStore.get('globals') || {};
        $rootScope.settings = $cookieStore.get('settings') || {};

        var getMenus = function(){
            var navigation = [
                { code: 'main', name: 'Dashboard'},
                { code: 'dashboard', name: 'Dashboard (new)'},
                { code: 'device', name: 'Device'},
                { code: 'sensor', name: 'Sensor'},
                { code: 'athlete', name: 'Athlete'},
                { code: 'report', name: 'Report'}
                //{ code: 'menu', name: 'Menu'}
            ];
            return navigation;
        }

        // start
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            //console.log('--- locationChangeStart ---');
            if($location.path() === '' || $location.path() === '/') {
                $location.path('/main');
            }
            $rootScope.setupUI();			
        });
        

        // set up UI
        $rootScope.setupUI = function () {
            $rootScope.settings.navigation = getMenus();        
        }

    }
]);