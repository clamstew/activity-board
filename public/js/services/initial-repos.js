// this will be the initial repos loaded by default
// the user can of course wipe these out and store
// their own in the localStorage persistance

(function(app) {

  app.service('initialRepos', function() {
    return [
      {
        user: 'clamstew',
        repo: 'activity-board'
      },
      {
        user: 'clamstew',
        repo: 'backbone-todo-app'
      },
      {
        user: 'clamstew',
        repo: 'matchsetter'
      }
    ]
  });

})(activityBoard.app);