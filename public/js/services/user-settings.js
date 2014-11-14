// this can map to a user settings view
// where they can set all the prefs for this

(function(app) {

  app.service('userSettings', [function() {
    // return initialRepos
    var prefs = {};

    prefs.siteTitle = 'Always Be Committing';

    prefs.setSiteTitle = function() {};

    // user can set
    // * title
    // * tagline
    // * background image
    // * background color/image sidebar
    // * show or hide fork me banner

    return prefs;
  }]);

})(activityBoard.app);