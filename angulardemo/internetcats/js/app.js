'use strict';

angular.module('catApp.services', []);

angular.module('catApp.controllers', ['catApp.services']);

var catApp = angular.module('catApp', [
    'ngRoute',
    'catApp.controllers'
]);

catApp.config(function($routeProvider) {
    'use strict';

    $routeProvider.
        when('/cat/:cat', {
            templateUrl: 'partials/cat.html'
        }).
            when('/', {
            templateUrl: 'partials/cat-list.html',
            controller: 'CatListController'
        }).
            otherwise({
            redirectTo: '/'
        });
});