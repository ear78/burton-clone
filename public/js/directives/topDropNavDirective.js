angular.module('myApp')
  .directive('topDropNavDirective', function(){

    return {
      restrict: 'E',
      templateUrl: '../../views/directives/topDropNavDirective.html',
      link: function(scope, element, attrs){
        // FLAG FOR DROP NAV
        scope.dropNav = true;

        // FUNCTION FOR TOGGLE DROP NAV
        scope.toggleDropNav = function(){
          scope.dropNav = !scope.dropNav;
        }
      }
    };
  });
