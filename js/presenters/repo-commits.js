// the riot presenter for each repo
(function () {


    // need to make this a local
    // function to this presenter
    window.renderCommits =function(root){
        var root = root;
        // var hello =  function(){
        //     console.log("Hello World!");
        // }
        return {
            render : function(repoName, commits) {
                // hello();
              // console.log('data returned by github commit api for matchsetter repo', commits);
              var $root = $(root)
                , commitTemplate = $("#templates .commit").html()
              ;

              $root.append('<div class="individual-repo-wrap" data-reponame=""></div>');
              $root.children(".individual-repo-wrap").last().data('reponame', repoName);

              // loop through the commits that come back
              // in the commits var passed in
              // $root.empty();
              for (var i = 0; i <= commits.length; i += 1) {
                var currentdatetimeMinusTwo = new Date().minusHours(2);
                var currentdatetimeMinusDay = new Date().minusHours(24);
                var date = new Date(commits[i].commit['author']["date"]);

                // add classes for how recent the commit was
                var recent;
                if ( date > currentdatetimeMinusTwo ) {
                    recent = "recent";
                } else if ( date > currentdatetimeMinusDay && date < currentdatetimeMinusTwo ) {
                    recent = "past-day";
                } else {
                    recent = "";
                }

                var commitStuffs = {
                    id: repoName,
                    message: commits[i].commit["message"],
                    user: commits[i].author["login"],
                    date: date.toLocaleDateString() + " - " + date.toLocaleTimeString(),
                    recent: recent
                };

                console.log(commitStuffs);
                // console.log('past day !! ', commitStuffs['recent'] );
                var commitHtml = $.render(commitTemplate, commitStuffs);
                $root.children(".individual-repo-wrap").last().append(commitHtml);
              }
            }
        }
    };


})();