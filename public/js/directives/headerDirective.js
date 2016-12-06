angular.module('myApp')
  .directive('headerDirective', function($log){
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/headerDirective.html',
      link: function(scope, elem, attr){
        //HIDE SIDEMENU
        scope.hideSideMenu = true;
        //TOGGLE CLASS FOR CLOSE BUTTON ANIMATIONS
        scope.toggle = false;

        //OPEN SIDEMENU
        scope.openSideMenu = function(){
          scope.hideSideMenu = !scope.hideSideMenu;
          scope.toggle = !scope.toggle;
        }

        //SIDEMENU CLOSE FUNCTIONS
        scope.closeSideMenu = function(){
          scope.hideSideMenu = !scope.hideSideMenu;
          scope.toggle = !scope.toggle;
        }

        //LOGO SWITCH FUNCTION
        scope.logoShow = true;
        scope.logoSwitch = function(){
          scope.logoShow = !scope.logoShow;
        }
      }
    };
  });
