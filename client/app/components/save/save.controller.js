var save = angular.module('save-controller', []);

save.controller('SaveController', SaveController);

function SaveController($scope, $http, $state) {
  $scope.fundNameInput = '';
  $scope.current$Input = '';

  $scope.saveFunds = function(name, currentValue, dp) {
    dp = dp || 0;

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
      if (res.data === 'Funds have been added') {
        $state.reload();
      }
      return res;
    });
  };

  $scope.clearFunds = function() {

    $http({
      method: 'DELETE',
      url: '/restart'
    })
    .then(function(res) {
      if (res.data === 'Funds have been cleared') {
        $state.reload();
      }
      return res;
    })

  }
}
