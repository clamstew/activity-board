'use strict';

(function(app) {

  app.directive('sidebar', function() {
    var link = function(scope, element, attrs) {
      scope.showSidebar = function() {
        console.log('toggling showSidebar ...');
        if (angular.element('aside').css('display') == 'none') {
          angular.element('aside').css('display', 'block');
          angular.element('.aside-open').css('display', 'none');
        }
      };

      scope.hideSidebar = function() {
        console.log('toggling hideSidebar ...');
        if (angular.element('aside').css('display') == 'block') {
          angular.element('aside').css('display', 'none');
          angular.element('.aside-open').css('display', 'block');
        }
      };
    };

    return {
      restrict: 'A',
      link: link,
      templateUrl: function(elem, attr) {
        return '../js/views/sidebar.html';
      }
    };
  });

})(activityBoard.app);