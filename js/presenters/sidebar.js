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

              var repoStuffs = {
                id: repoName,
                repo: repoName,
                userLink: this.makeUserLink(username),
                user: username,
                repolink: this.makeRepoLink(repoName, username),
              };
              var repoHtml = $.render(repoTemplate, repoStuffs);
              console.log('this repo url', repoHtml);
              $root.children(".sidebar-repo-wrap").last().append(repoHtml);
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

    // SIDEBAR EVENT LISTENTERS
    $(document).ready(function() {
      // adjust the height of the sidebar
      var windowh = +$(document).height();
      $('aside').css("height", windowh);
      $(window).on('resize', function() {
        windowh = +$(window).height() - 20;
        $('aside').css("height", windowh);
      });

      // hide and close the sidebar
      $('aside .close').on('click', function(event) {
        event.preventDefault();
        console.log('close clicked');
        $('aside').hide();
        $('.aside-open').show();
      });

      $('.aside-open').on('click', function(event) {
        event.preventDefault();
        console.log('open sidebar clicked');
        $('.aside-open').hide();
        $('aside').show();
      });

      // add repo event listeners on sidebar
      $('aside .add-repo').on('click', function() {
        alert('Adding this New Repo to the mix ....');
        $('aside #add-repo').show();
        // $('#add-repo').val(); // this needs to go in the enter function
        // for the type repo user name input

        // still need to add the code here to hide and show the
        // input username repo box
      });

      $('aside #add-repo').on('keypress', function(event) {
          switch (event.which) {
          case 13:
            // ...
            alert('you pressed enter!');
            break;
          }
      });
    });
})();