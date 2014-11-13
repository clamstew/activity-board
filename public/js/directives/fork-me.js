'use strict';

(function(app) {

  app.directive('forkMeBanner', function() {
    return {
      restrict: 'A',
      templateUrl: '../js/views/fork-me-banner.html'
    } 
  });

})(activityBoard.app);