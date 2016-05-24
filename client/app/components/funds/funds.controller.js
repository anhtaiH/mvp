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
    $scope.funds = res.data.slice(0, 4);
    console.log('Successful GET request! Scope Funds is now ====>', $scope.funds);

    $scope.totalCash = $scope.funds.reduce(function(totalCash, fund) {
      return fund.current$ + totalCash;
    }, 0);

    $scope.funds.forEach(function(fund) {
      fund.currentPercentage = (fund.current$ / $scope.totalCash * 100).toFixed(2);
      fund.desiredValue = (fund.desired / 100 * $scope.totalCash).toFixed(2);
      var ftt = (fund.desiredValue - fund.current$).toFixed(2)

      fund.ftt = ftt > 0 ? '+$' + ftt :
        ftt < 0 ? '-$' + Math.abs(ftt) : '$' + 0;

      fund.direction = ftt > 0 ? 'BUY' :
        ftt < 0 ? 'SELL' : 'N/A';
    });
  });
}
