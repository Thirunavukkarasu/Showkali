angular.module('Showkali', [
	'ngResource', 
	'ngMessages', 
	'ngRoute', 
	'mgcrea.ngStrap',
	'ngAnimate',
	'core',
	'home',
	'addshow',
	'detail',
	'login',
	'signup'
])
.config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider.otherwise({redirectTo:'/'}); 	
}])
.controller('NavbarCtrl', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.logout = function() {
      AuthService.logout();
    };
}]);