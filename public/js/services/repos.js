// goes out and gets the commits for each repo

(function(app) {

  app.service('repos', ['initialRepos', '$http', '$log',
    function(initialRepos, $http, $log) {
    // return initialRepos
    var o = {},
        _private = {
          // used on commits
          makeUsernameAndLink: function(commitDiffs) {
            var self = this;
            _.each(commitDiffs, function(commit){
              if (commit.author !== null) {
                commit.ghUsername = commit.author.login;
                commit.ghProfileLink = commit.author.html_url;
              } else {
                commit.ghUsername = commit.commit.author.name;
                commit.ghProfileLink = 'http://github.com';
              }
              commit = self._.makeDates(commit);
            });
            return commitDiffs;
          },
          // used on repos
          makeUserLink: function(repo) {
            var link = "http://github.com/" + repo.user;
            return link;
          },
          makeRepoLink: function(repo) {
            var link = "http://github.com/" + repo.user + "/" + repo.repo;
            return link;
          },
          // private functions
          _: {
            makeDates: function(commit) {
              var currentdatetimeMinusTwo = new Date().minusHours(2)
                , currentdatetimeMinusDay = new Date().minusHours(24)
                , date = new Date(commit.commit.author.date)
              ;
              commit.recent = this.createClass(date, currentdatetimeMinusTwo, currentdatetimeMinusDay);
              commit.date = date.toLocaleDateString() + " | " + date.toLocaleTimeString();
              return commit;
            },
            createClass: function(date, currentdatetimeMinusTwo, currentdatetimeMinusDay) {
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
            }
          }
        }
    ;

    // to store all the commit log messages as array of arrays of objects
    o.repos = [];

    o.getAll = function() {
      // don't run this if there are already repos
      // could make a update function and only use this on init
      if (this.repos.length) return;
      if (initialRepos && initialRepos.length) {
        _.each(initialRepos, function(repo) {
          var repoUrl = "https://api.github.com/repos/" + repo.user + "/" + repo.repo + "/commits";
          $http.get(repoUrl).
            success(function(data, status, headers, config) {
              // @TODO: research if I can leave this step out and
              //        instead use the main objects username, repo to show up
              //        in all the commits that are nest below it in the dom
              //        you would think that would work...
              // make user name and prifle link on all the commit diff
              data = _private.makeUsernameAndLink(data);
              // assign all diffs data to this repo.commets
              repo.commits = data;
              // add username adn repos links to the repo object itself
              // which contins the commits object
              // use this to make the header on each blue repo box
              repo.userLink = _private.makeUserLink(repo);
              repo.repoLink = _private.makeRepoLink(repo);
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

    o.add = function(userRepoName) {
      var userName
        , repoName
        , seperateUserAndRepoName = (function(userRepoName) {
        // separate on the slash into array
        // return array;
        var array = userRepoName.split("/");
        userName = array[0];
        repoName = array[1];
      })(userRepoName);

      var repoUrl = "https://api.github.com/repos/" + userName + "/" + repoName + "/commits";
      $http.get(repoUrl).
        success(function(data, status, headers, config) {
          var repo = { user: userName, repo: repoName };
          data = _private.makeUsernameAndLink(data);
          repo.commits = data;
          repo.userLink = _private.makeUserLink(repo);
          repo.repoLink = _private.makeRepoLink(repo);
          // console.log('what is repo', repo);
          o.repos.push(repo);
          return {success: true};
        }).
        error(function(data, status, headers, config) {
          $log.warn('Error from Github API | status-> ', status);
          return {success: false};
        });
    };

    // remove a repo from the this.repos object
    o.remove = function(repo) {};

    return o;
  }]);

})(activityBoard.app);