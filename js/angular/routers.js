// adicionei 'resolve' as rotas para fornecer o nome e id dos templates
// somente nos 3 primeiros como teste, porém no 'main' é necessário que o 'resolve' esteja declarado
main.config(['$routeProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/delivery', {
            templateUrl: 'views/delivery.html',
            controller: 'DashboardController',
            resolve: {
                alias: function( $q, $timeout ) {
                    return {
                        getNome: function() {
                            return 'Delivery';
                        },
                        getId: function() {
                            return 'delivery';
                        }
                    }
                  }
            }
        }).
        when('/clientes', {
            templateUrl: 'views/clientes.html',
            controller: 'DashboardController',
            resolve: {
                alias: function() {
                    return {
                        getNome: function() {
                            return 'Clientes';
                            
                        },
                        getId: function() {
                            return 'clientes';
                        }
                    }
                }
            }
        }).
        when('/inicial', {
            templateUrl: 'views/inicial.html',
            controller: 'DashboardController',
            resolve: {
                alias: function() {
                    return {
                        getNome: function() {
                            return 'Inicial';
                        },
                        getId: function() {
                            return 'inicial';
                        }
                    }
                }
            }
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
            redirectTo: 'inicial'
        });
}]);

