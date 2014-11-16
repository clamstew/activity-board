'use strict';

(function(app) {

  app.directive('sidebarNav', function() {
      var link = function(scope, element, attrs) {};
      return {
        restrict: 'A',
        link: link,
        templateUrl: '../js/views/shared/sidebar-nav.html'
      };
    });

})(activityBoard.app);