(function () {

    var variables = {
        MyControllers: {}
    };

    variables.MyControllers = angular.module('controllersUser', ['ngRoute']);

    // ********************* PRODUCTS *******************************//
    variables.MyControllers.controller('productsListUser', ['$scope', '$filter', '$http', 'store', 'cartServ', function ($scope, $filter, $http, store, cartServ) {

        $scope.addProductToCart = function (product) {
            cartServ.add(product);
        }

        $http.get("model/products.json").success(function (data) {
            $scope.products = data;
        }).error(function () {
            console.log("Error json file");
        })
    }]);

    variables.MyControllers.controller('productDetailsUser', ['$scope', '$http', '$routeParams', 'store', function ($scope, $http, $routeParams, store) {
        $http.get("model/products.json").success(function (data) {
            var products = data;
            $scope.product = products[$routeParams.id];
        }).error(function () {
            console.log("Error json file");
        })

    }]);

    // ********************* ORDERS *******************************//

    variables.MyControllers.controller('ordersListUser', ['$scope', '$http', function ($scope, $http) {
        $http.get("model/orders.json").success(function (data) {
            $scope.orders = data;
        }).error(function () {
            console.log("Error json file");
        })
    }]);

    // ********************* CART *******************************//

    variables.MyControllers.controller('cartCtrl', ['$scope', '$http', 'cartServ', function ($scope, $http, cartServ) {


        $scope.cart = function () {
            return cartServ.show();
        }

        $scope.total = function () {
            return cartServ.countTotalPrice();
        }

        $scope.empty = function () {
            cartServ.empty();
        }

        $scope.removeItem = function (index) {
            cartServ.removeItem(index);
        }

        $scope.createOrder = function ($event) {
            var logIn = true;
            if (!logIn) {
                $scope.alert = {type: 'warning', msg: 'You must login'};
                $event.preventDefault();
                return
            }
            else {
                // TODO zapisac w bazie zamowienie
                $scope.alert = {type: 'success', msg: 'Order ok. Wait...'};
            }
        }
    }]);

}());