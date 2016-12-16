angular.module('myApp')
  .directive('womensDropNavDirective', function($timeout){

    return {
      restrict: 'E',
      templateUrl: '../../views/directives/womensDropNavDirective.html',
      link: function(scope, element, attrs){
        // FLAG FOR DROP NAV
        scope.womensDropNav = true;

        // FUNCTION FOR TOGGLE DROP NAV
        scope.toggleWomensDropNav = function(){
            scope.womensDropNav = !scope.womensDropNav;
        }

      }
    };
  });
