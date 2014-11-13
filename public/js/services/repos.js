// goes out and gets the commits for each repo

(function(app) {

  app.service('repos', ['initialRepos', '$http', function(initialRepos, $http) {
    // return initialRepos
    var o = {};

    // to store all the commit log messages as array of arrays of objects
    o.repos = [];

    o.getAll = function() {
      var createClass = function(date, currentdatetimeMinusTwo, currentdatetimeMinusDay) {
        // add classes for how recent the commit was
        var recent;
        if ( date > currentdatetimeMinusTwo ) {
            recent = "recent";
        } else if ( date > currentdatetimeMinusDay && date < currentdatetimeMinusTwo ) {
            recent = "past-day";
        } else {
            recent = "";
        }
        return recent;
      };
      var makeUsernameAndLink = function(commitDiffs) {
        _.each(commitDiffs, function(commit){
          if (commit.author !== null) {
            commit.ghUsername = commit.author.login;
            commit.ghProfileLink = commit.author.html_url;
          } else {
            commit.ghUsername = commit.commit.author.name;
            commit.ghProfileLink = 'http://github.com';
          }
          commit = makeDates(commit);
        });
        return commitDiffs;
      };
      var makeDates = function(commit) {
        var currentdatetimeMinusTwo = new Date().minusHours(2);
        var currentdatetimeMinusDay = new Date().minusHours(24);
        var date = new Date(commit.commit.author.date);
        commit.recent = createClass(date, currentdatetimeMinusTwo, currentdatetimeMinusDay);
        commit.date = date.toLocaleDateString() + " | " + date.toLocaleTimeString();
        return commit;
      };

      if(initialRepos && initialRepos.length) {
        _.each(initialRepos, function(repo) {
          var repoUrl = "https://api.github.com/repos/" + repo.user + "/" + repo.repo + "/commits";
          $http.get(repoUrl).
            success(function(data, status, headers, config) {
              data = makeUsernameAndLink(data);
              repo.commits = data;
              o.repos.push(repo);
            }).
            error(function(data, status, headers, config) {
              // any ajax call errors
              console.warn('GET Error from server', status);
            });
        });
      }
    };

    return o;
  }]);

})(activityBoard.app);