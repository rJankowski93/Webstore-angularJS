(function () {

    var variables = {
        MyControllers: {}
    };

    variables.MyControllers = angular.module('controllers', ['ngRoute']);

    // ********************* PRODUCTS *******************************//

    variables.MyControllers.controller('productsAdmin', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

        $http.get("model/products.json").success(function (data) {
            $scope.products = data;
        }).error(function () {
            console.log("Error json file");
        })

        $scope.removeProduct = function (product, $index) {
            // TODO tutaj bedziemy usuwac z bazy
            $scope.products.splice($index, 1)
        }

    }]);

    variables.MyControllers.controller('productEditAdmin', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $http.get("model/products.json").success(function (data) {
            var products = data;
            $scope.product = products[$routeParams.id];
        }).error(function () {
            console.log("Error json file");
        })

        $scope.saveChanges = function (product) {
            // TODO tutaj bedziemy zapisywac zmeiny do bazy
        }
    }]);

    variables.MyControllers.controller('productCreateAdmin', ['$scope', '$http', function ($scope, $http) {
        $scope.product;
        $scope.createProduct = function (product) {
            // TODO tutaj bedziemy zapisywac zmeiny do bazy
        }
    }]);

    // ********************* NAVIGATION *******************************//

    variables.MyControllers.controller('navigation', ['$scope', '$location', function ($scope, $location) {
        $scope.navigation = function () {
            if ( /^\/admin/.test( $location.path() ) )
                return 'partials/admin/navigation.html';
            else
                return 'partials/user/navigation.html';
        };

        $scope.isActive = function (path) {
            return (path === $location.path());
        }

    }]);

    // ********************* USERS *******************************//

    variables.MyControllers.controller('usersAdmin', ['$scope', '$http', function ($scope, $http) {
        $http.get("model/users.json").success(function (data) {
            $scope.users = data;
        }).error(function () {
            console.log("Error json file");
        })

        $scope.removeUser = function (user, $index) {
            // TODO tutaj bedziemy usuwac z bazy
            $scope.users.splice($index, 1)
        }
    }]);

    variables.MyControllers.controller('userCreateAdmin', ['$scope', '$http', function ($scope, $http) {
        $scope.user;
        /*
         * $scope.createUser = function(user) { // TODO tutaj bedziemy zapisywac
         * zmeiny do bazy }
         */
    }]);

    variables.MyControllers.controller('userEditAdmin', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $http.get("model/users.json").success(function (data) {
            var users = data;
            $scope.user = users[$routeParams.id];
        }).error(function () {
            console.log("Error json file");
        })

        $scope.saveChanges = function (user) {
            // TODO tutaj bedziemy zapisywac zmeiny do bazy
        }
    }]);

    // ********************* ORDERS *******************************//

    variables.MyControllers.controller('ordersAdmin', ['$scope', '$http', function ($scope, $http) {
        $http.get("model/orders.json").success(function (data) {
            $scope.orders = data;
        }).error(function () {
            console.log("Error json file");
        })

        $scope.removeOrder = function (order, $index) {
            // TODO tutaj bedziemy usuwac z bazy
            $scope.orders.splice($index, 1)
        }

        $scope.changeStatus = function (order, $index) {
            // TODO tutaj bedziemy usuwac z bazy
            if ($scope.orders[$index].status == 1) {
                $scope.orders[$index].status = 0;
            }
            else {
                $scope.orders[$index].status = 1;
            }
        }
    }]);

    variables.MyControllers.controller('orderEditAdmin', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $http.get("model/orders.json").success(function (data) {
            var orders = data;
            $scope.order = orders[$routeParams.id];
        }).error(function () {
            console.log("Error json file");
        })

        $scope.saveChanges = function (order) {
            // TODO tutaj bedziemy zapisywac zmeiny do bazy
        }
    }]);


}());