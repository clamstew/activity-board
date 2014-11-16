'use strict';

(function(app) {

  app.directive('sidebarNav', function() {
      var link = function(scope, element, attrs) {

        // initialize input box as hidden
        scope.addRepoInputDisplay = false;
        scope.showAddRepoInput = function() {
          scope.addRepoInputDisplay = !scope.addRepoInputDisplay;
        };

      };
      return {
        restrict: 'A',
        link: link,
        templateUrl: '../js/views/shared/sidebar-nav.html'
      };
    });

})(activityBoard.app);