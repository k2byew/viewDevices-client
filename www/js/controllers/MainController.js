app.controller('MainCtrl', function($scope, $timeout, DeviceService) {
  $scope.deviceData = [];

  DeviceService.GetDevice().then(function(deviceData){
  $scope.devices = deviceData;
  $scope.groups = [];
  $scope.groups[0] = {name: 'Vendor', items:deviceData.vendorList};
  $scope.groups[1] = {name: 'IP Address', items:deviceData.ipList};
  $scope.groups[2] = {name: 'MAC Address', items:deviceData.deviceList};
  });

  $scope.doRefresh = function() {
    DeviceService.GetDevice().then(function(deviceData){
      $scope.devices = deviceData;
      $scope.groups = [];
      $scope.groups[0] = {name: 'Vendor', items:deviceData.vendorList};
      $scope.groups[1] = {name: 'IP Address', items:deviceData.ipList};
      $scope.groups[2] = {name: 'MAC Address', items:deviceData.deviceList};

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

});