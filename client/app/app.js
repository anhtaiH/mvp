var app = angular.module('portfolio-app', [
  'funds-controller',
  'save-controller',
  'ui.router'
]);

app.config(function($stateProvider, $httpProvider) {
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
    });
});
