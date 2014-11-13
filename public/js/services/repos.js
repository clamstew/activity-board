// goes out and gets the commits for each repo

(function(app) {

  app.service('repos', ['initialRepos', '$http', function(initialRepos, $http) {
    // return initialRepos
    var o = {};

    // to store all the commit log messages as array of arrays of objects
    o.repos = [];

    o.getAll = function() {
      var makeUsernameAndLink = function(commitDiffs) {
        console.log('what is the repoOb', commitDiffs);
        // var ghUsername, ghUsernameLink;
        _.each(commitDiffs, function(commit){
          console.log('what is a commit', commit);
          if (commit.author !== null) {
            commit.ghUsername = commit.author.login;
            commit.ghProfileLink = commit.author.html_url;
          } else {
            commit.ghUsername = commit.commit.author.name;
            commit.ghProfileLink = 'http://github.com';
          }
        });
        return commitDiffs;
      };

      if(initialRepos && initialRepos.length) {
        _.each(initialRepos, function(repo) {
          var repoUrl = "https://api.github.com/repos/" + repo.user + "/" + repo.repo + "/commits";
          $http.get(repoUrl).
            success(function(data, status, headers, config) {
              // this callback will be called asynchronously
              // when the response is available
              data = makeUsernameAndLink(data);
              repo.commits = data;
              o.repos.push(repo);
            }).
            error(function(data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              console.warn('GET Error from server', status);
            });
        });
      }
    };

    return o;
  }]);

})(activityBoard.app);