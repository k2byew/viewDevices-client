app.factory('DeviceService', function($http){
  var URL = "http://path-to-json.json";
  var deviceData = [];

  return {
    GetDevice: function(){
      return $http.get(URL).then(function(response){
        deviceData = response.data;
        return deviceData;
      });
    }
  }
});