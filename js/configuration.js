
(function() {

	var variables = {
			ngShop : {}
		};

	variables.ngShop = angular.module('ngShop' , [ 'ngRoute' , 'controllersAdmin' , 'controllersUser', 'controllersNavigation' , 'angular-storage', 'servicesFactory', 'angularFileUpload' , 'myDirectives' ]);

	variables.ngShop.config([ '$routeProvider'  , function( $routeProvider ) {
		
		// ********************* PRODUCTS *******************************//
		
		$routeProvider.when("/admin/productsList", {
			controller: "productsListAdmin",
			templateUrl: "partials/admin/productsList.html"
		})
		
		$routeProvider.when("/admin/productEdit/:id", {
			controller: "productEditAdmin",
			templateUrl: "partials/admin/productEdit.html"
		})
		
		$routeProvider.when("/admin/productCreate", {
			controller: "productCreateAdmin",
			templateUrl: "partials/admin/productCreate.html"
		})

		$routeProvider.when("/productsList", {
			controller: "productsListUser",
			templateUrl: "partials/user/productsList.html"
		})

		$routeProvider.when("/productDetails/:id", {
			controller: "productDetailsUser",
			templateUrl: "partials/user/productDetails.html"
		})
		
		// ********************* USERS *******************************//
		
		$routeProvider.when("/admin/usersList", {
			controller: "usersListAdmin",
			templateUrl: "partials/admin/usersList.html"
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
		
		$routeProvider.when("/admin/ordersList", {
			controller: "ordersListAdmin",
			templateUrl: "partials/admin/ordersList.html"
		})
		
		$routeProvider.when("/admin/orderEdit/:id", {
			controller: "orderEditAdmin",
			templateUrl: "partials/admin/orderEdit.html"
		})

		$routeProvider.when("/admin/orderCreate", {
			controller: "orderCreateAdmin",
			templateUrl: "partials/admin/orderCreate.html"
		})

		$routeProvider.when("/ordersList", {
			controller: "ordersListUser",
			templateUrl: "partials/user/ordersList.html"
		})

		$routeProvider.when("/orderDetails", {
			controller: "orderDetailsUser",
			templateUrl: "partials/user/orderDetails.html"
		})

		// ********************* CART *******************************//

		$routeProvider.when("/cart", {
			controller: "cartCtrl",
			templateUrl: "partials/user/cart.html"
		})

		// ********************* LOGIN *******************************//

		$routeProvider.when("/login", {
			controller: "login",
			templateUrl: "partials/user/login.html"
		})

		$routeProvider.when("/registration", {
			controller: "registration",
			templateUrl: "partials/user/registration.html"
		})

		// ****************************************************//
		
		$routeProvider.otherwise({
			redirectTo: '/home'
		})
	}]);

}());
