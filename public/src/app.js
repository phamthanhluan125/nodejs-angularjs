var app = angular.module('myApp', []);

app.controller('myController', myController);

function myController($scope, $http) {
  $scope.title = 'Xin chao!!!';
  $scope.listUsers = [];

  $scope.getListUsers = function(){
    $http.get('/user').then(function(result) {
      $scope.listUsers = result.data;
    });
  }
  $scope.getListUsers();
}
