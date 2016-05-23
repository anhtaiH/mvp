var app = angular.module('portfolio-app', [
  'funds-controller',
  'funds-factory',
  'save-controller',
  'save-factory',
  'ui-router'
]);

app.config(function($stateProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '/',
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
