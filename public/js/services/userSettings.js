// goes out and gets the commits for each repo

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