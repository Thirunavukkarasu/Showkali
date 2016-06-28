angular
	.module('core')
	.factory('ShowService', ['$resource',ShowService]);

function ShowService($resource) {
	return $resource('/api/shows/:_id')
}