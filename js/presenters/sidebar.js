(function () {
    // the presenter for the sidebar
    window.renderSidebarRepos = function() {
        return {
            render : function(repoName, username) {
              var $root = $('aside');
              var formattedRepo = username + " / " + repoName;
              var repoTemplate = $("#templates .repo").html();

              $root.append('<div class="sidebar-repo-wrap" data-reponame="" data-username=""></div>');
              $root.children(".sidebar-repo-wrap").last().data('reponame', repoName);
              $root.children(".sidebar-repo-wrap").last().data('username', username);

              var repoStuffs = {
                id: repoName,
                repo: repoName,
                userLink: this.makeUserLink(username),
                user: username,
                repolink: this.makeRepoLink(repoName, username),
              };
              var repoHtml = $.render(repoTemplate, repoStuffs);
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
        $('aside').hide();
        $('.aside-open').show();
      });

      $('.aside-open').on('click', function(event) {
        event.preventDefault();
        $('.aside-open').hide();
        $('aside').show();
      });

      // add repo event listeners on sidebar
      //
      // Listen for click on add repo button
      // to hide and show the add repot input and style button
      $('aside .add-repo').on('click', function() {
        if ($('.add-repo-input-wrap').hasClass('tuckedaway')) {
          // Showing the add repo input box ...
          $('.add-repo-input-wrap').show().addClass('readytogo').removeClass('tuckedaway');
          $('aside .add-repo').html('<i class="fa fa-minus-circle"></i>');
        } else {
          // Hiding the add repo input box ...
          $('.add-repo-input-wrap').hide().addClass('tuckedaway').removeClass('readytogo');
          $('aside .add-repo').html('<i class="fa fa-plus-circle"></i>');
        }
      });

      // Listener for the enter key on the input repo box
      // should run a script to add the new repo to the page
      // maybe run create page again right after the new repo
      // is added to the repos list json file
      $('aside #add-repo').on('keypress', function(event) {
        switch (event.which) {
        case 13:
          var inputText = $(this).val();
          var inputArray = inputText.split("/", 2);
          // put REGEX validation if input array not formatted properly as array
          // make sure it matches a reges for the patter "string/string"
          // then break here
          var username = inputArray[0];
          var repo = inputArray[1];
          var url = "https://api.github.com/repos/" + username + "/" + repo + "/commits";
          window.repos.push({ user: username , repo: repo });
          createPage();
          $(this).val(''); // clear the input
          break;
        case 191:
          return "/";
        }
      }).on('blur', function() {
        $(this).val('');
      });

      // cool effect on the sidebar icons on hover over the repo names
      // so before you click it has an arrow showing you you are about to
      // go to a new page
      $('aside').on('mouseover', '.repo-row', function(){
        $(this).children('i.fa-github').remove();
        $(this).prepend('<i class="fa fa-chevron-circle-right"></i>');
        $(this).children('i.fa-minus-circle.remove').show();
      }).on('mouseout', '.repo-row', function(){
        $(this).children('i.fa-chevron-circle-right').remove();
        $(this).prepend('<i class="fa fa-github"></i> ');
        $(this).children('i.fa-minus-circle.remove').hide();

      // the sidebar delete repo function
      }).on("click", 'i.fa-minus-circle.remove', function() {
        var repoName = $(this).closest('.sidebar-repo-wrap').data('reponame');
        var userName = $(this).closest('.sidebar-repo-wrap').data('username');
        deleteRepo(repoName, userName);
        $(this).closest('.sidebar-repo-wrap').remove();
        window.createPage();

      // show info / about modal function
      }).on('click', '.app-info-show', function() {
        $('#help-about-modal').show();
      });

      // helper method for the delete repo function
      var deleteRepo = function(repoName, repoUser) {
        for (var i = 0; i < repos.length; i += 1) {
          var user = repos[i]['user'], repo = repos[i]['repo'];
          if (repo === repoName) { window.repos.splice(i, 1); }
        }
      };
    }); // end of $(document).ready();

})();