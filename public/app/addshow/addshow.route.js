angular.module('addshow', [])

.config(['$routeProvider', function ($routeProvider) {
     $routeProvider.when("/addshow", {
		templateUrl: "app/addshow/addshow.tpl.html", 
		controller: "AddShowController"
	 }); 
}]);