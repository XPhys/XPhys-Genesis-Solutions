/// <reference path="angular.js" />
angular.module("exampleApp.Controllers", [])

.controller("DayController", function ($scope, days) {
    $scope.day = days.today;
})

.controller("NextDayController", function ($scope, days) {
    $scope.nextDay = days.tomorrow;
});