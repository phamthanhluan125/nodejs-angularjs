angular.module('myApp')
  .directive('drtManageUser', function() { 'use strict';
    return {
      restrict: 'E',
      templateUrl: 'manage-user-template.html',
      controller: 'ManageUserCtrl',
      controllerAs: 'ctrl',
      scope: {
        templates: '&'
      }
    };
  });
