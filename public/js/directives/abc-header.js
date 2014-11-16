'use strict';

(function(app) {

  app.directive('abcHeader', ['userSettings',
    function(userSettings) {
      var link = function(scope, element, attrs){

        scope.title = userSettings.siteTitle;
        scope.$on('userSettings:setSiteTitle', function(event, data) {
          scope.title = data;
        });

        scope.subTitle = userSettings.siteSubTitle;
        scope.$on('userSettings:setSiteSubTitle', function(event, data) {
          scope.subTitle = data;
        });

      };
      return {
        restrict: 'A',
        link: link,
        templateUrl: '../js/views/abc-header.html'
      }
    }]);

})(activityBoard.app);