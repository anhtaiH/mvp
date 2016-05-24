var save = angular.module('save-controller', []);

save.controller('SaveController', SaveController);

function SaveController($scope, $http) {
  $scope.fundNameInput = '';
  $scope.current$Input = '';

  $scope.saveFunds = function(name, currentValue, dp) {

    if (name === 'Cash') {
      dp = 0
    }

    if (name === 'Cash' && !currentValue) {
      currentValue = 0;
    }

    var newFunds = {
      name: name,
      current$: currentValue,
      desired: dp
    };


    return $http({
      method: 'POST',
      url: '/save',
      data: JSON.stringify(newFunds)
    })
    .then(function(res) {
      console.log('Response from post request....', res);
      return res;
    });
  };

  $scope.clearFunds = function() {

    $http({
      method: 'DELETE',
      url: '/restart'
    })
    .then(function(res) {
      console.log('Response was successfully deleted ===>', res);
      return res;
    })

  }
}
