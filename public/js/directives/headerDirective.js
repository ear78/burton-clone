angular.module('myApp')
  .directive('headerDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/headerDirective.html'
    };
  });
