var save = angular.module('save-controller', []);

save.controller('SaveController', SaveController);

function SaveController($scope, $http) {
  $scope.fundNameInput = '';
  $scope.current$Input = '';

  $scope.saveFunds = function(name, currentValue) {

    var newFunds = {
      name: name,
      current$: currentValue
    };

    return $http({
      method: 'POST',
      url: '/save',
      data: JSON.stringify(newFunds)
  })
  .then(function(res) {
    console.log('Response from post request....', res);
    $scope.cashInput = '';
    $scope.fundNameInput = '';
    $scope.current$Input = '';

    return res;
  })

  }

}
