'use strict';

(function(app) {

  app.directive('sidebar', ['$window', function($window) {
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

      scope.sidebarHeight = function() {
        // return $window
        return $window.innerHeight - 20 + 'px';
      };

    };

    return {
      restrict: 'A',
      link: link,
      templateUrl: '../js/views/sidebar.html'
    };
  }]);

})(activityBoard.app);