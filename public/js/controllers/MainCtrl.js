angular.module('myApp')
    .controller('MainCtrl', function($scope){

        // function for about us mobile dropdown
        $scope.showAboutUs = false;
        $scope.toggleAboutUs = function(){
            $scope.showAboutUs = !$scope.showAboutUs;
        }



    })
