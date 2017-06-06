angular.module('clientAdminApp',['ngRoute','ngResource']);
angular.module('clientAdminApp').constant("baseURL","http://localhost:3000/");
angular.module('clientAdminApp').config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './views/dashboard.html',
            controller  : 'clientsDashboardController'
        })
        .when('/client/create', {
            templateUrl : './views/client/editCreate.html',
            controller  : 'clientEditCreateController'
        })
        .when('/client/edit/:id', {
            templateUrl : './views/client/editCreate.html',
            controller  : 'clientEditCreateController'
        })
        .otherwise(
            {
                redirectTo:'/'
            }
        );

    $locationProvider.hashPrefix('');

});
