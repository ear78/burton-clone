angular.module('myApp')
  .directive('picGalleryDirective', function(){
    return {
      restrict: 'E',
      templateUrl: '../../views/directives/picGalleryDirective.html'
    };
  });
