var funds = angular.module('funds-controller', []);

funds.controller('FundsController', FundsController);

function FundsController($scope, $http) {

  $scope.funds = null;
  $scope.totalCash = 0;
  $http({
    method: 'GET',
    url: '/funds'
  })
  .then(function(res) {
    $scope.funds = res.data;

    $scope.totalCash = $scope.funds.reduce(function(totalCash, fund) {
      return fund.current$ + totalCash;
    }, 0);

    $scope.funds.forEach(function(fund) {
      fund.currentPercentage = Math.round(fund.current$ / $scope.totalCash * 100).toFixed(2);

    });

    console.log('Successful GET request! Scope Funds is now ====>', $scope.funds);


  });

}
