var login = angular.module('login-controller', []);

login.controller('LoginController', LoginController);

function LoginController($scope, $http, $state) {

  $scope.verifyUser = function(email, password) {

    $scope.wrong = false;

    var user = {
      email: email,
      password: password
    };

    return $http({
      method: 'POST',
      url: '/login',
      data: JSON.stringify(user)
    })
    .then(function(res) {
      console.log(res);
      if (res.data === 'Success!') {
      console.log('Trying to redirect ==>', res);
        $state.go('home');
      } else {
        $scope.wrong = true;
      }
      return res;
    })
  }

}
