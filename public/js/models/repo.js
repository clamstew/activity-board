window.githubRepo = function(repoName, username, repo, root) {

	var presenter = new renderCommits(root);
	var sidebarPresenter = new renderSidebarRepos();

	return {
		render: function (){
			render: $.get(repo, function(data) {
				presenter.render(repoName, data, username);
			}, 'json');
		},
		renderSidebarRepo: function(){
			sidebarPresenter.render(repoName, username);
		}
	};
};