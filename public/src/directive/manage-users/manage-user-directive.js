angular.module('myApp')
  .directive('drtManageUser', function() { 'use strict';
    return {
      restrict: 'E',
      templateUrl: 'directive/manage-users/manage-user-template.html',
      controller: 'manageUserCtrl',
      controllerAs: 'ctrl',
      scope: {
        templates: '&'
      }
    };
  });
