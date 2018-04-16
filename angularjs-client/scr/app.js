var app = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'dndLists'])

app.controller('kanBanCtrl', kanBanCtrl);

function kanBanCtrl() {
  var ctrl = this;
  console.log('Hello World!');
}
