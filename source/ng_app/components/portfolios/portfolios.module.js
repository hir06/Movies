(function() {
    "use strict";

    angular.module('MoviesApp.portfolios', [
            "MoviesApp.portfolios.controllers",
            "MoviesApp.portfolios.services",
        ])
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider.when('/Portfolios', {
            controller: 'PortfoliosController',
            controllerAs: 'portfoliosVM',
            templateUrl: 'ng_app/components/portfolios/portfolios.html',
            //resolve: {}
        });
    }

})();