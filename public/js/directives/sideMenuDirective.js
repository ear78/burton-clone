angular.module('myApp')
  .directive('sideMenuDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/sideMenuDirective.html'
    };
  });
