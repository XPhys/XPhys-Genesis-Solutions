/// <reference path="angular.js" />

var app = angular.module("XPhys", []);

app.controller("MainController", function ($scope) {
    this.myName = 'XeeX';
    $scope.mainModel = {
        searchText: ''
    };
    //this.encodeText = btoa($scope.searchText);
    this.encodeText = '';
    this.searchChanged = function (val) {
        this.encodeText = btoa(val);
    }
});

