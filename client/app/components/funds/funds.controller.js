var funds = angular.module('funds-controller', []);

funds.controller('FundsController', FundsController);

function FundsController($scope, $http) {

  $scope.funds = null;

  $http({
    method: 'GET',
    url: '/funds'
  })
  .then(function(res) {
    console.log('Successful GET request from DB ===>', JSON.stringify(res.data));
    $scope.funds = res.data;
  });

}
