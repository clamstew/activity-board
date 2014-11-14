'use strict';

(function(app) {

  app.directive('forkMeBanner', function() {
    var link = function(scope, element, attrs) {
      scope.repoUrl = 'https://github.com/clamstew/activity-board/tree/rewrite-angular';
      scope.imageUrl = 'https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png';
    };

    return {
      restrict: 'A',
      link: link,
      templateUrl: '../js/views/fork-me-banner.html'
    } 
  });

})(activityBoard.app);