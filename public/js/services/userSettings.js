// goes out and gets the commits for each repo

(function(app) {

  app.service('userSetting', [function() {
    // return initialRepos
    var prefs = {};

    prefs.siteTitle = 'Always Be Committing';

    prefs.setSiteTitle = function() {};


    return prefs;
  }]);

})(activityBoard.app);