'use strict';

(function(app) {

  app.directive('sidebar', ['$log', '$window', 'repos',
    function($log, $window, repos) {
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
          if(!scope.addRepoInputDisplay) {
            element.find('input').val('');
          }
        };

        scope.sidebarHeight = function() {
          return $window.innerHeight - 20 + 'px';
        };

        //@TODO - also make it so it listens to the window resize event
        //        and resizes the height on that event as well as when it is revealed

        scope.addRepo = function($event, userRepoName) {
          // $log.log('add repo fired', userRepoName);
          var result = repos.add(userRepoName);
          // @TODO: research how $q works
          //        then use it here to clear the input on the
          //        success callback from the http request
          // if (result.success) {
          element.find('input').val('');
          // } else {
            // send up some error message
            // need an error message spot
          // }
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