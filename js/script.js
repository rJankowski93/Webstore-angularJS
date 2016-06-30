
(function() {

	var variables = {
			ngShop : {}
		};

	var app = angular.module( 'app' , [ 'ngRoute' , 'controllers' ] );
	
	variables.ngShop = angular.module('ngShop' , [ 'ngRoute' , 'controllers' ]);

	variables.ngShop.config([ '$routeProvider','$httpProvider'   , function( $routeProvider, $httpProvider ) {
		
		// ********************* PRODUCTS *******************************//
		
		$routeProvider.when("/products", {
			controller: "products",
			templateUrl: "partials/products.html"
		})
		
		$routeProvider.when("/productEdit/:id", {
			controller: "productEdit",
			templateUrl: "partials/productEdit.html"
		})
		
		$routeProvider.when("/productCreate", {
			controller: "productCreate",
			templateUrl: "partials/productCreate.html"
		})
		
		// ********************* USERS *******************************//
		
		$routeProvider.when("/users", {
			controller: "users",
			templateUrl: "partials/users.html"
		})
		
		$routeProvider.when("/userEdit/:id", {
			controller: "userEdit",
			templateUrl: "partials/userEdit.html"
		})
		
		$routeProvider.when("/userCreate", {
			controller: "userCreate",
			templateUrl: "partials/userCreate.html"
		})
		
		// ********************* ORDERS *******************************//
		
		$routeProvider.when("/orders", {
			controller: "orders",
			templateUrl: "partials/orders.html"
		})
		
		$routeProvider.when("/orderEdit/:id", {
			controller: "orderEdit",
			templateUrl: "partials/orderEdit.html"
		})
		
		// ****************************************************//
		
		$routeProvider.otherwise({
			redirectTo: '/home'
		})
	}]);

}());
