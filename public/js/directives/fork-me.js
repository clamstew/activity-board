'use strict';

(function(app) {

  app.directive('forkMeBanner', ['userSettings', function(userSettings) {
    var link = function(scope, element, attrs) {
      scope.repoUrl = 'https://github.com/clamstew/activity-board/tree/rewrite-angular';
      scope.imageUrl = 'https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png';

      scope.showForkMeBanner = userSettings.showForkMeBanner;
    };

    return {
      restrict: 'A',
      link: link,
      templateUrl: '../js/views/fork-me-banner.html'
    } 
  }]);

})(activityBoard.app);