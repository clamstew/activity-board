// the riot presenter for each repo
(function () {

    window.renderCommits = function(root) {
        var root = root;
        return {
            createClass : function(date, currentdatetimeMinusTwo, currentdatetimeMinusDay) {
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
            },
            render : function(repoName, commits, username) {
              var $root = $(root);
              var commitTemplate = $("#templates .commit").html();

              $root.append('<div class="individual-repo-wrap" data-reponame=""></div>');
              $root.children(".individual-repo-wrap").last().data('reponame', repoName);
              $root.children(".individual-repo-wrap").last().prepend("<div class='title'><a target='_blank' href='http://github.com/"+username+"/"+repoName+"'> / "+repoName+"</a></div>");

              for (var i = 0; i < commits.length; i += 1) {
                var currentdatetimeMinusTwo = new Date().minusHours(2);
                var currentdatetimeMinusDay = new Date().minusHours(24);
                var date = new Date(commits[i].commit['author']["date"]);
                var recent = this.createClass(date, currentdatetimeMinusTwo, currentdatetimeMinusDay);

                // error handling since sometimes
                // commits[i].author comes back null
                var ghUsername, ghUsernameLink;
                if (commits[i].author === null) {
                    ghUsername = commits[i].commit.author.name;
                    ghUsernameLink = 'http://github.com';
                } else {
                    ghUsername = commits[i].author["login"];
                    ghUsernameLink = commits[i].author["html_url"];
                }

                var commitStuffs = {
                    id: repoName,
                    message: commits[i].commit["message"],
                    user: ghUsername,
                    userlink: ghUsernameLink,
                    link: commits[i].html_url,
                    date: date.toLocaleDateString() + " | " + date.toLocaleTimeString(),
                    recent: recent
                };

                var commitHtml = $.render(commitTemplate, commitStuffs);
                $root.children(".individual-repo-wrap").last().append(commitHtml);
              }
            }
        };
    };

})();