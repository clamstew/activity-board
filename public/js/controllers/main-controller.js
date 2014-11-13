'use strict';

(function(app) {

  app.controller('MainCtrl', ['$scope', 'repos', function($scope, repos){

    $scope.repos = repos;
    console.log('$scope.repos', $scope.repos);

    $scope.showSidebar = function() {
      console.log('toggling showSidebar ...');
      if (angular.element('aside').css('display') == 'none') {
        angular.element('aside').css('display', 'block');
        angular.element('.aside-open').css('display', 'none');
      } else {
        angular.element('aside').css('display', 'none');
        angular.element('.aside-open').css('display', 'block');
      }
    };

    $scope.hideSidebar = function() {
      console.log('toggling showSidebar ...');
      if (angular.element('aside').css('display') == 'none') {
        angular.element('aside').css('display', 'block');
        angular.element('.aside-open').css('display', 'none');
      } else {
        angular.element('aside').css('display', 'none');
        angular.element('.aside-open').css('display', 'block');
      }
    };

  }]);

})(activityBoard.app);