(function() {
    'use strict';
    var MoviesApp = angular.module("MoviesApp", [
        'ngRoute',
        'MoviesApp.portfolios'
    ])


    MoviesApp.config(['$routeProvider', '$compileProvider', '$locationProvider',
        function($routeProvider, $compileProvider, $locationProvider) {
            $routeProvider
                .otherwise({
                    redirectTo: '/Portfolios'
                });
        }
    ]);

    MoviesApp.run(function($rootScope, $window) {
        console.log("App started successfully!");
    });

})();