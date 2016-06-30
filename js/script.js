
(function() {

	var variables = {
			ngShop : {}
		};

	var app = angular.module( 'app' , [ 'ngRoute' , 'controllers' ] );
	
	variables.ngShop = angular.module('ngShop' , [ 'ngRoute' , 'controllers' ]);

	variables.ngShop.config([ '$routeProvider'  , function( $routeProvider ) {
		
		// ********************* PRODUCTS *******************************//
		
		$routeProvider.when("/admin/products", {
			controller: "productsAdmin",
			templateUrl: "partials/admin/products.html"
		})
		
		$routeProvider.when("/admin/productEdit/:id", {
			controller: "productEditAdmin",
			templateUrl: "partials/admin/productEdit.html"
		})
		
		$routeProvider.when("/admin/productCreate", {
			controller: "productCreateAdmin",
			templateUrl: "partials/admin/productCreate.html"
		})

		$routeProvider.when("/products", {
			controller: "products",
			templateUrl: "partials/user/products.html"
		})

		$routeProvider.when("/product", {
			controller: "product",
			templateUrl: "partials/user/product.html"
		})
		
		// ********************* USERS *******************************//
		
		$routeProvider.when("/admin/users", {
			controller: "usersAdmin",
			templateUrl: "partials/admin/users.html"
		})
		
		$routeProvider.when("/admin/userEdit/:id", {
			controller: "userEditAdmin",
			templateUrl: "partials/admin/userEdit.html"
		})
		
		$routeProvider.when("/admin/userCreate", {
			controller: "userCreateAdmin",
			templateUrl: "partials/admin/userCreate.html"
		})

		// ********************* ORDERS *******************************//
		
		$routeProvider.when("/admin/orders", {
			controller: "ordersAdmin",
			templateUrl: "partials/admin/orders.html"
		})
		
		$routeProvider.when("/admin/orderEdit/:id", {
			controller: "orderEditAdmin",
			templateUrl: "partials/admin/orderEdit.html"
		})

		$routeProvider.when("/admin/orderCreate", {
			controller: "orderCreateAdmin",
			templateUrl: "partials/admin/orderCreate.html"
		})

		$routeProvider.when("/orders", {
			controller: "orders",
			templateUrl: "partials/user/orders.html"
		})

		$routeProvider.when("/order", {
			controller: "order",
			templateUrl: "partials/user/order.html"
		})
		
		// ****************************************************//
		
		$routeProvider.otherwise({
			redirectTo: '/home'
		})
	}]);

}());
