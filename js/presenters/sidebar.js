// the presenter for the sidebar
(function () {
    window.renderSidebarRepos = function() {

        return {
            render : function(repoName, username) {
              var $root = $('aside');
              // console.log('current root', $root);
              var formattedRepo = username + " / " + repoName;
              console.log('repo formated', formattedRepo);
              // var $root = $('aside');
              var repoTemplate = $("#templates .repo").html();

              $root.append('<div class="sidebar-repo-wrap" data-reponame=""></div>');
              $root.children(".sidebar-repo-wrap").last().data('reponame', repoName);

              // for (var i = 0; i < commits.length; i += 1) {
                var repoStuffs = {
                    id: repoName,
                    repo: this.makeUserLink(username),
                    user: username,
                    userlink: this.makeRepoLink(repoName, username),
                };
                var repoHtml = $.render(repoTemplate, repoStuffs);
                console.log('this repo url', repoHtml);
                $root.children(".sidebar-repo-wrap").last().append(repoHtml);
                console.log('this ran!!');
              // }
            },
            makeUserLink : function(username) {
                var link = "http://github.com/" + username;
                return link;
            },
            makeRepoLink : function(repoName, username) {
                var link = "http://github.com/" + username + "/" + repoName;
                return link;
            }
        };
    };
})();