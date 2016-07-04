(function () {

    var variables = {
        MyControllers: {}
    };

    variables.MyControllers = angular.module('controllersUser', ['ngRoute']);

    // ********************* PRODUCTS *******************************//
    variables.MyControllers.controller('productsListUser', ['$scope', '$filter', '$http' , 'store', 'cartServ' , function ($scope, $filter, $http, store, cartServ) {

        // var myObj = {
        //     name: 'mgonto'
        // };

      //  store.set('obj', myObj);


    
        $scope.addProductToCart = function ( product ) {
            cartServ.add( product );

        }

        $scope.show = function () {
            cartServ.show();
        }

        $http.get("model/products.json").success(function (data) {
            $scope.products = data;
        }).error(function () {
            console.log("Error json file");
        })
    }]);

    variables.MyControllers.controller('productDetailsUser', ['$scope', '$http', '$routeParams', 'store', function ($scope, $http, $routeParams, store) {
        console.log(store.get('obj'));
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


}());