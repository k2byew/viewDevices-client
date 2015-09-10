app.factory('devices', ['$http', function($http) {
  return $http.get('http://path-to-json-file.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
