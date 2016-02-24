angular.module('catApp.services')
.factory('Cat', function($http) {
    'use strict';

    function Cat(catData) {
        angular.extend(this, catData);
    }

    Cat.getAll = function () {
        return $http({
            method: 'GET',
            url: 'data/cats.json'
        });
    }

    return Cat;
});
