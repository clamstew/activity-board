'use strict';

(function(app) {

  app.directive('sidebar', ['$window', '$log',
    function($window, $log) {
      var link = function(scope, element, attrs) {

        // initialize sidebar as closed
        scope.sidebarOpen = false;
        scope.toggleSidebar = function() {
          scope.sidebarOpen = !scope.sidebarOpen;
        };

        scope.sidebarHeight = function() {
          return $window.innerHeight - 20 + 'px';
        };

        //@TODO - also make it so it listens to the window resize event
        //        and resizes the height on that event as well as when it is revealed

        scope.addRepo = function($event, userRepoName) {
          $log.log('add repo fired', userRepoName);
          
        };

        scope.removeRepo = function(repo) {};

      };

      return {
        restrict: 'A',
        link: link,
        templateUrl: '../js/views/sidebar.html'
      };
    }]);

})(activityBoard.app);