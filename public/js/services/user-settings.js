'use strict';
// this can map to a user settings view
// where they can set all the prefs for this

(function(app) {

  app.service('userSettings', ['$rootScope', function($rootScope) {
    // return initialRepos
    var prefs = {};

    /*
    *
    * Site Title
    *
    */

    // could have function initSiteTitle
    // and it could look like
    // need to include modernizr and use
    // its checkfor local storage function
    // prefs.initSiteTitle = function() {
    //   // if local storage
    //   // is has key site title
    //   // if site title property is not empty
    //   // then set prefs.siteTitle to the one in LS
    //   // else set it to default
    //   // prefs.siteTitle = 'Always Be Committing';
    // }

    // Site Title
    prefs.siteTitle = 'Always Be Committing';

    prefs.setSiteTitle = function(siteTitle) {
      this.siteTitle = siteTitle;
      $rootScope.$broadcast('userSettings:setSiteTitle', siteTitle);
    };

    /*
    *
    * Site Sub-Title
    *
    */

    // Site Sub Title / Tag Line
    prefs.siteSubTitle = 'Monitor Open Source Github Projects in Real Time ';

    prefs.setSiteSubTitle = function(siteSubTitle) {
      this.siteSubTitle = siteSubTitle;
      $rootScope.$broadcast('userSettings:setSiteSubTitle', siteSubTitle);
    };

    /*
    *
    * Github Fork-me Banner
    *
    */

    prefs.showForkMeBanner = true;
    prefs.setShowForkMeBanner = function() {
      this.showForkMeBanner = !this.showForkMeBanner;
    };

    // user can set:
    //  * background image
    //  * background color/image sidebar

    return prefs;
  }]);

})(activityBoard.app);