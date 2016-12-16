angular.module('myApp')
  .directive('topDropNavDirective', function($timeout){

    return {
      restrict: 'E',
      templateUrl: '../../views/directives/mensDropNavDirective.html',
      link: function(scope, element, attrs){
        // FLAG FOR DROP NAV
        scope.mensDropNav = true;

        // FUNCTION FOR TOGGLE DROP NAV
        scope.toggleMensDropNav = function(){
            scope.mensDropNav = !scope.mensDropNav;
        }

      }
    };
  });
