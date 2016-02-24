angular.module('catApp.controllers')
.controller('CatListController', function ($scope, Cat) {
    'use strict';

    Cat.getAll().success(function (response) {
        $scope.cats = response.cats;
    });
});