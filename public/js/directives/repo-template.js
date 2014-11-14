'use strict';

(function(app) {

  app.directive('repoTemplate', function() {
    return {
      restrict: 'A',
      templateUrl: '../js/views/commit.html'
    } 
  });

})(activityBoard.app);