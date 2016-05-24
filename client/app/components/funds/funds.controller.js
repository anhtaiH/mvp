var funds = angular.module('funds-controller', []);

funds.controller('FundsController', FundsController);

function FundsController($scope, $http, $state) {

  var updateFunds = function(fund) {
    var desiredValue = (fund.desired / 100 * $scope.totalCash).toFixed(2);
    fund.desiredValue = '$' + String((fund.desired / 100 * $scope.totalCash).toFixed(2));
    fund.currentPercentage = (fund.current$ / $scope.totalCash * 100).toFixed(2);

    var ftt = (desiredValue - fund.current$).toFixed(2)

    fund.ftt = ftt > 0 ? '+$' + ftt :
      ftt < 0 ? '-$' + Math.abs(ftt) : '$' + 0;

    fund.direction = ftt > 0 ? 'BUY' :
      ftt < 0 ? 'SELL' : 'N/A';
  };

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

    $scope.funds.forEach(updateFunds);

    $scope.updateTarget();

  });

  $scope.invalidPercentage = false;

  $scope.updateTarget = function() {
    var totalPercentage = $scope.funds.reduce(function(prev, curr) {
      return prev + +curr.desired;
    }, 0);

    console.log('Total percentage', totalPercentage, $scope.funds);

    if (totalPercentage !== 100) {
      $scope.invalidPercentage = true;
    } else if (totalPercentage === 100) {

      $scope.funds.forEach(updateFunds);

      $scope.invalidPercentage = false;
    }

  }


}
