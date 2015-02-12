// adicionei 'resolve' as rotas para fornecer o nome e id dos templates
// somente nos 3 primeiros como teste, porém no 'main' é necessário que o 'resolve' esteja declarado
main.config(['$routeProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'ajax/dashboard.html',
            controller: 'DashboardController',
            resolve: {
                alias: function( $q, $timeout ) {
                    return {
                        getNome: function() {
                            return 'Dashboard';
                        },
                        getId: function() {
                            return 'dashboard';
                        }
                    }
                  }
            }
        }).
        when('/charts_xcharts', {
            templateUrl: 'ajax/charts_xcharts.html',
            controller: 'DashboardController',
            resolve: {
                alias: function() {
                    return {
                        getNome: function() {
                            return 'Chart xChart';
                        },
                        getId: function() {
                            return 'chart_xcharts';
                        }
                    }
                }
            }
        }).
        when('/charts_flot', {
            templateUrl: 'ajax/charts_flot.html',
            controller: 'DashboardController',
            resolve: {
                alias: function() {
                    return {
                        getNome: function() {
                            return 'Chart Flot';
                        },
                        getId: function() {
                            return 'chart_flot';
                        }
                    }
                }
            }
        }).
        when('/charts_google', {
            templateUrl: 'ajax/charts_google.html',
            controller: 'DashboardController'
        }).
        when('/charts_morris', {
            templateUrl: 'ajax/charts_morris.html',
            controller: 'DashboardController'
        }).
        when('/charts_coindesk', {
            templateUrl: 'ajax/charts_coindesk.html',
            controller: 'DashboardController'
        }).
        otherwise(
        {
            redirectTo: '/home'
        });
}]);

