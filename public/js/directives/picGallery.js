angular.module('myApp')
  .directive('picGallery', function(){
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/picGallery.html'
    };
  });
