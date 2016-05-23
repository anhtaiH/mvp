var save = angular.module('save-controller', []);

save.controller('SaveController', SaveController);

function SaveController($scope, $http) {
  $scope.cashInput = '';
  $scope.fundNameInput = '';
  $scope.current$Input = '';

  $scope.saveFunds = function(name, cash, currentValue) {
    console.log('Look at the new entry ===>', newFunds);

    var newFunds = {
      name: name,
      cash: cash,
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
