app.controller('MainCtrl', ['$scope', 'devices', function($scope, devices) {

  devices.success(function(data) {
    $scope.devices = data;
    $scope.groups = [];
    $scope.groups[0] = {name: 'Vendor', items:data.vendorList};
    $scope.groups[1] = {name: 'IP Address', items:data.ipList};
    $scope.groups[2] = {name: 'MAC Address', items:data.deviceList};
  });

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

}]);