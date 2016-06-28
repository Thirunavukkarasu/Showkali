angular
  .module('core')
  .factory('SubscriptionService', ['$resource',SubscriptionService]);

function SubscriptionService($resource) {
    return {
      subscribe: function(show, user) {
        return $http.post('/api/subscribe', { showId: show._id });
      },
      unsubscribe: function(show, user) {
        return $http.post('/api/unsubscribe', { showId: show._id });
      }
    };
}