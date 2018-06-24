var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/user'); //Mọi đường dẫn không hợp lệ đều được chuyển đến state home

    $stateProvider.state('user', {
      url: '/user',
      templateUrl: 'views/user.html'
    });
});
