var register = angular.module('register-controller', []);

register.controller('RegisterController', RegisterController);

function RegisterController($scope, $http, $state) {

  $scope.registerUser = function(email, name, password) {

    var newUser = {
      email: email,
      name: name,
      password: password
    }

    return $http({
      method: "POST",
      url: '/register',
      data: JSON.stringify(newUser)
    })
    .then(function(res) {
      console.log('Response from creating new user', res);
      if (res.data === 'Success!') {
        $state.go('home');
      } else {

      }
      return res;
    })
  }

}
