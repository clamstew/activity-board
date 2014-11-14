'use strict';

(function(app) {

  app.directive('repoTemplate', function() {
    return {
      restrict: 'A',
      templateUrl: '../js/views/repo-template.html'
    } 
  });

})(activityBoard.app);