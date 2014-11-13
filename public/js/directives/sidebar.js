'use strict';

(function(app) {

  app.directive('sidebar', function() {
    return {
      restrict: 'A',
      templateUrl: '../js/views/sidebar.html'
    };
  });

})(activityBoard.app);