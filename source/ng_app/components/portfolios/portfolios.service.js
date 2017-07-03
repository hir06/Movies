(function() {
    angular.module('MoviesApp.portfolios.services', [])
        .factory('PortfoliosService', PortfoliosService);

    PortfoliosService.$inject = ["$q", "$http", "$timeout", "appConstants"];

    function PortfoliosService($q, $http, $timeout, appConstants) {


        var PortfoliosService = {
            fetchMovies: fetchMovies

        };

        return PortfoliosService;

        function fetchMovies() {
            var def = $q.defer();

            var req = {
                method: 'GET',
                url: appConstants.movieAPI,
                headers: {},
                params: {

                }
            }
            $http(req).then(function(response) {
                def.resolve({
                    movieList: response.data
                });
            }, function(arg) {
                def.reject(arg.data);
            });

            return def.promise;
        }


    }
})();