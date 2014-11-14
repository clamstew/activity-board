'use strict';

(function(app) {

  app.directive('sidebar', function() {
    var link = function(scope, element, attrs) {

      // initialize sidebar as closed
      scope.sidebarOpen = false;
      scope.toggleSidebar = function() {
        scope.sidebarOpen = !scope.sidebarOpen;
      };

      // initialize input box as hidden
      scope.addRepoInputDisplay = false;
      scope.showAddRepoInput = function() {
        scope.addRepoInputDisplay = !scope.addRepoInputDisplay;
      };

    };

    return {
      restrict: 'A',
      link: link,
      templateUrl: '../js/views/sidebar.html'
    };
  });

})(activityBoard.app);