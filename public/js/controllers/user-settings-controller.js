'use strict';

(function(app) {

  app.controller('UserSettingsCtrl', ['$scope', 'userSettings',
    function($scope, userSettings){

      // user can set the site title
      $scope.siteTitle = userSettings.siteTitle;
      $scope.setSiteTitle = function() {
        userSettings.setSiteTitle($scope.siteTitle);
      };

      // user can set the site's sub title
      $scope.siteSubTitle = userSettings.siteSubTitle;
      $scope.setSiteSubTitle = function() {
        userSettings.setSiteSubTitle($scope.siteSubTitle);
      };

      // user can set the site's sub title
      $scope.showForkMeBanner = userSettings.showForkMeBanner;
      $scope.setShowForkMeBanner = function() {
        userSettings.setShowForkMeBanner();
      };

  }]);

})(activityBoard.app);