'use strict';

(function () {
    var variables = {
        servicesFactory: {}
    };

    variables.servicesFactory = angular.module('servicesFactory', []);


    variables.servicesFactory.factory('cart', ['store', function (store) {

        var cart = [];

        cart.show = function () {
            console.log(store.get('obj'));
        };

        return cart;

    }]);
}());




