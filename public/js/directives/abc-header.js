'use strict';

(function(app) {

  app.directive('abcHeader', function() {
    return {
      restrict: 'A',
      templateUrl: '../js/views/abc-header.html'
    }
  });

})(activityBoard.app);