angular.module('myApp')
  .directive('headerDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/headerDirective.html',
      link: function(scope, elem, attr){
        //HIDE SIDEMENU
        scope.hideSideMenu = true;

        //OPEN SIDEMENU
        scope.openSideMenu = function(){
          scope.hideSideMenu = !scope.hideSideMenu;
        }

        //SIDEMENU CLOSE FUNCTIONS
        scope.closeSideMenu = function(){
          scope.hideSideMenu = !scope.hideSideMenu;
        }
      }
    };
  });
