angular.module('myApp')
  .directive('footerDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/footerDirective.html',
      link: function(scope, elem, attr){
        // functions for about us mobile dropdown
        scope.showAboutUs = false;
        scope.toggleAboutUs = function(){
            scope.showAboutUs = !scope.showAboutUs;

        }

        // functions for Discover mobile dropdown
        scope.showDiscover = false;
        scope.toggleDiscover = function(){
            scope.showDiscover = !scope.showDiscover;
        }

        //function for Customer service dropdown
        scope.showCustomerService = false;
        scope.toggleCustomerService = function(){
            scope.showCustomerService = !scope.showCustomerService;
        }

        //SIDEMENU CLOSE FUNCTIONS
        scope.hideSideMenuModal = false;
        scope.closeSideMenu = function(){
          scope.hideSideMenuModal = !scope.hideSideMenuModal;
        }
      }
    };
  });
