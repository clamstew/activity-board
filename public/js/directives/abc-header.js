'use strict';

(function(app) {

  app.directive('abcHeader', function() {
    var link = function(scope){
      scope.title = 'Always Be Committing';
      scope.subTitle = 'Monitor Open Source Github Projects in Real Time ';
    };
    return {
      restrict: 'A',
      link: link,
      templateUrl: '../js/views/abc-header.html'
    }
  });

})(activityBoard.app);