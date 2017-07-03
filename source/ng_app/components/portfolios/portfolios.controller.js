(function() {
    "use strict";
    angular.module('MoviesApp.portfolios.controllers', [])
        .controller('PortfoliosController', PortfoliosController);

    PortfoliosController.$inject = ['$rootScope', '$scope', '$route', '$location', '$timeout', '$interval', 'AppService', 'PortfoliosService', 'appConstants'];

    function PortfoliosController($rootScope, $scope, $route, $location, $timeout, $interval, AppService, PortfoliosService, appConstants) {
        var _this = this;
        _this.LayoutClass = 'grid';

        _this.query = "";

        window.scrollTo(0, 0);
        _this.AppService = AppService;
        _this.fetchMovies = fetchMovies;
        _this.budgetOrder = true; //ascending order
        _this.loadmore = loadmore;

        _this.setLayout = setLayout;

        _this.data = "";
        _this.movieList = "";

        _this.page = [];

        function loadmore(event) {
            var temp = event.target;
            var index = parseInt(temp.innerHTML);
            $('.pageActive').removeClass('pageActive');
            $(temp).addClass('pageActive');
            if (index != 1) _this.movieList = (_this.data).slice((index - 1) * 20, ((index - 1) * 20) + 20);
            else _this.movieList = (_this.data).slice(index, (index * 20));
        }

        function fetchMovies() {
            var promiseObj = PortfoliosService.fetchMovies();
            AppService.ShowLoader();
            promiseObj.then(function success(data) {

                    _this.data = data.movieList;
                    _this.movieList = _this.data.slice(1, 20);
                    for (var i = 1; i <= Math.ceil(_this.data.length / 20); i++) {
                        _this.page.push(i);
                    }
                    var dataForAutocomplete = {}
                    _this.data.map(function(d) {
                        dataForAutocomplete[d.movie_title] = "http://placehold.it/250x250";
                        dataForAutocomplete[d.genres.split('|')] = "http://placehold.it/250x250";

                    });
                    $('input.autocomplete').autocomplete({
                        data: dataForAutocomplete
                    });
                    AppService.HideLoader();
                },
                function error() {
                    Materialize.toast("Couldn't load movies!", 4000, "red")
                });
        }




        function setLayout(layout) {
            _this.LayoutClass = layout;
        }


        fetchMovies();

    }

})();