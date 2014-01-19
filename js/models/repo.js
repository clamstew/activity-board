window.githubRepo = function(repoName, username, repo, root) {

	var presenter = new renderCommits(root);
	var sidebarPresenter = new renderSidebarRepos();

	return {
		render: function (){
			render: $.get(repo, function(data) {
				// console.log(data);
				presenter.render(repoName, data);
			}, 'json');
		},
		renderSidebarRepo: function(){
			// console.log('render sidebar is running');
			// render: sidebarPresenter.render(data);
			sidebarPresenter.render(repoName, username);
		}
	};
};