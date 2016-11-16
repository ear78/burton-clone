angular.module('myApp')
    .controller('MainCtrl', function($scope){

        // functions for about us mobile dropdown
        $scope.showAboutUs = false;
        $scope.toggleAboutUs = function(){
            $scope.showAboutUs = !$scope.showAboutUs;

        }

        // functions for Discover mobile dropdown
        $scope.showDiscover = false;
        $scope.toggleDiscover = function(){
            $scope.showDiscover = !$scope.showDiscover;
        }

        //function for Customer service dropdown
        $scope.showCustomerService = false;
        $scope.toggleCustomerService = function(){
            $scope.showCustomerService = !$scope.showCustomerService;
        }



    })
