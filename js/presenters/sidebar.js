(function () {
// the presenter for the sidebar
    window.renderSidebarRepos = function() {
        return {
            render : function(repoName, username) {
              var $root = $('aside');
              // console.log('current root', $root);
              var formattedRepo = username + " / " + repoName;
              // console.log('repo formated', formattedRepo);
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
              // console.log('this repo url', repoHtml);
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
        if ($('.add-repo-input-wrap').hasClass('tuckedaway')) {
          console.log('Showing the add repo input box ....');
          $('.add-repo-input-wrap').show().addClass('readytogo').removeClass('tuckedaway');
          $('aside .add-repo').html('<i class="fa fa-minus-circle"></i>');
        } else {
          console.log('Hiding the add repo input box ....');
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
          // put validation if input array not formatted properly as array
          // make sure it matches a reges for the patter "string/string"
          // then break here
          console.log('input array', inputArray);
          var username = inputArray[0];
          var repo = inputArray[1];
          console.log('you pressed enter!');
          var url = "https://api.github.com/repos/" + username + "/" + repo + "/commits";
          console.log('your url', url);
          $(this).val(''); // clear the input
          break;
        }
      });

      // cool effect on the sidebar icons on hover over the repo names
      // so before you click it has an arrow showing you you are about to
      // go to a new page
      $('aside').on('mouseover', '.repo-row', function(){
        $(this).children('i').remove();
        $(this).prepend('<i class="fa fa-chevron-circle-right"></i>');
      }).on('mouseout', '.repo-row', function(){
        $(this).children('i').remove();
        $(this).prepend('<i class="fa fa-github"></i> ');
      });

    }); // end of $(document).ready();

})();