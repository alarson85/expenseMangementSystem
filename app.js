angular.module('ems', ['ui.router']);

angular.module('ems')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'emsCtrl'
    })
    $urlRouterProvider.otherwise('/');
});
