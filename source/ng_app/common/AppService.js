(function() {
    'use strict';
    var AppService = angular.module('MoviesApp')
        .factory('AppService', function($rootScope, $http, $location, $timeout) {


            return {
                ShowLoader: function(message) {

                    (function() {
                        setTimeout(function() {
                            $rootScope.$apply(function() {
                                $rootScope.loaderVisibility = true;
                                $rootScope.loaderText = message;
                            })
                        }, 0);
                    })();
                },
                HideLoader: function() {
                    (function() {
                        setTimeout(function() {
                            $rootScope.$apply(function() {
                                $rootScope.loaderVisibility = false;
                            })
                        }, 0);
                    })();

                }

            };
        })

})();