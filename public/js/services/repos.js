// goes out and gets the commits for each repo

(function(app) {

  app.service('repos', ['initialRepos', '$http', '$log',
    function(initialRepos, $http, $log) {
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
      var makeUserLink = function(repo) {
        var link = "http://github.com/" + repo.user;
        return link;
      };
      var makeRepoLink = function(repo) {
        var link = "http://github.com/" + repo.user + "/" + repo.repo;
        return link;
      };

      if(initialRepos && initialRepos.length) {
        _.each(initialRepos, function(repo) {
          var repoUrl = "https://api.github.com/repos/" + repo.user + "/" + repo.repo + "/commits";
          $http.get(repoUrl).
            success(function(data, status, headers, config) {
              data = makeUsernameAndLink(data);
              repo.commits = data;
              repo.userLink = makeUserLink(repo);
              repo.repoLink = makeRepoLink(repo);
              o.repos.push(repo);
            }).
            error(function(data, status, headers, config) {
              // any ajax call errors
              $log.warn('Error from Github API | status-> ', status);
            });
        });
      }
      // else { // see if any repos are stored in local storage // otherwise init to empty array of repos}
    };

    return o;
  }]);

})(activityBoard.app);