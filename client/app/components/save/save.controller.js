var save = angular.module('save-controller', []);

save.controller('SaveController', SaveController);

function SaveController($scope, $http) {
  $scope.fundNameInput = '';
  $scope.current$Input = '';

  $scope.saveFunds = function(name, currentValue, dp) {

    if (name === 'Cash') {
      dp = 0
    }
    console.log('cash ===>', currentValue)

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
}

// function clearInputFields($scope) {
//   $scope.fundName1 = '';
//   $scope.fundVal1 = '';
//   $scope.fundDesired1 = '';
//   $scope.fundName2 = '';
//   $scope.fundVal2 = '';
//   $scope.fundDesired2 = '';
//   $scope.fundName3 = '';
//   $scope.fundVal3 = '';
//   $scope.fundDesired3= '';
// }
