angular
	.module('signup')
	.controller('SignUpController',['$scope','AuthService',SignUpController]);

function SignUpController($scope,AuthService) {   
    $scope.signup = function() {
      AuthService.signup({
        email: $scope.email,
        password: $scope.password
      });
    };  
}