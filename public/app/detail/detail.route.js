angular.module('detail', [])

.config(['$routeProvider', function ($routeProvider) {
     $routeProvider.when("/shows/:id", {
		templateUrl: "app/detail/detail.tpl.html", 
		controller: "DetailController"
	 }); 
}]);