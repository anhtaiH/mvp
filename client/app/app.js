var app = angular.module('portfolio-app', [
  'funds-controller',
  'save-controller',,
  'login-controller',
  'register-controller',
  'navbar-controller',
  'ui.router',
  'ngRoute'
]);

app.config(function($stateProvider, $routeProvider, $httpProvider, $urlRouterProvider) {
  console.log('This is the state provider ===>', $stateProvider);
  $stateProvider
    .state('home', {
      url: '',
      views: {
        'save': {
          templateUrl: 'app/components/save/save.html',
          controller: 'SaveController'
        },
        funds: {
          templateUrl: 'app/components/funds/funds.html',
          controller: 'FundsController'
        }
      }
    })

    .state('register', {
      url: '/register',
      views: {
        register: {
          templateUrl: 'app/components/register/register.html',
          controller: 'RegisterController'
        },
      }
    })

    .state('login', {
      url: '/login',
      views: {
        register: {
          templateUrl: 'app/components/login/login.html',
          controller: 'LoginController'
        },
      }
    })
});

app.directive('navigation', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html'
  };
});
