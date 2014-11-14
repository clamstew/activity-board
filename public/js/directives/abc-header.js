'use strict';

(function(app) {

  app.directive('abcHeader', ['userSettings', function(userSettings) {
    var link = function(scope){
      scope.title = userSettings.siteTitle;
      scope.subTitle = 'Monitor Open Source Github Projects in Real Time ';
    };
    return {
      restrict: 'A',
      link: link,
      templateUrl: '../js/views/abc-header.html'
    }
  }]);

})(activityBoard.app);