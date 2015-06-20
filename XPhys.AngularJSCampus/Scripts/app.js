/// <reference path="angular.js" />
(function () {
    var gems = [
        { name: 'Azurite', price: 2.95, description: 'This is description ..', canPurchase: true },
        { name: 'Pentagonal Gem', price: 5.95, description: 'This is description ..', canPurchase: true }
    ];
    var app = angular.module('gemStore', []);
    app.controller("StoreController", function () {
        this.products = gems;
    });

    app.controller("PanelController", function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

})();



