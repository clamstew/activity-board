'use strict';

(function(app) {

  app.controller('MainCtrl', ['$scope', 'repos', function($scope, repos){

    $scope.repos = repos;
    console.log('$scope.repos', $scope.repos);

  }]);

})(activityBoard.app);