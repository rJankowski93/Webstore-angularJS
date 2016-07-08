'use strict';

(function () {
    var variables = {
        servicesFactory: {}
    };

    variables.servicesFactory = angular.module('servicesFactory', []);


    variables.servicesFactory.factory('cartServ', ['store','$filter', function (store, $filter) {
        if (store.get('cart'))
            var cart = store.get('cart');
        else
            var cart = [];


        cart.show = function () {
            return store.get('cart');
        };

        cart.add = function (product) {
            var newProduct = -1;
            if (store.get('cart')) {
                cart = store.get('cart');
                angular.forEach(cart, function (value, key) {
                    if (value.id == product.id) {
                        newProduct = key;
                    }
                })
                if (newProduct != -1) {
                    cart[newProduct].quantity++;
                }
                else {
                    product.quantity = 1;
                    cart.push(product);
                }
            }
            else {
                cart = [];
                product.quantity = 1;
                cart.push(product);
            }
            store.set("cart", cart);
        };

        cart.empty = function () {
            store.remove('cart');
            cart.length = 0;
        };

        cart.countTotalPrice = function () {
            var total = 0;
            angular.forEach(cart, function (value, key) {
                total = total + (value.price * value.quantity);
            })
            total= $filter( 'number' )( total , 2 );
            return total;
        };

        cart.removeItem = function (index) {
            cart.splice(index, 1);
            store.set("cart", cart);
        }

        return cart;

    }]);
}());



