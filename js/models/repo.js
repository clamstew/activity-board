window.githubRepo = function(repoName, userName, repo, root) {

	var presenter = new renderCommits(root);

	return {
		render: function (){
			render: $.get(repo, function(data) {
				// console.log(data);
				presenter.render(repoName, data);
			}, 'json');
		},
		renderSidebarRepo: function(){

		}
	};
};