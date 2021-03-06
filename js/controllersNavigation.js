(function () {

    var variables = {
        MyControllers: {}
    };

    variables.MyControllers = angular.module('controllersNavigation', ['ngRoute']);


    // ********************* NAVIGATION *******************************//

    variables.MyControllers.controller('navigation', ['$scope', '$location', 'cartServ', function ($scope, $location, cartServ) {
        $scope.navigation = function () {
            if (/^\/admin/.test($location.path()))
                return 'partials/admin/navigation.html';
            else
                return 'partials/user/navigation.html';
        };

        $scope.isActive = function (path) {
            return (path === $location.path());
        }

        $scope.cart = function () {
            return cartServ.show();
        }

    }]);


}());