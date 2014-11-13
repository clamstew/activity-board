'use strict';

(function(app){

  app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: './js/views/main.html',
          controller: 'MainCtrl',
          resolve: {
            reposPromise: ['repos', function(repos) {
              return repos.getAll();
            }]
          }
        });

      $urlRouterProvider.otherwise('home');
  }]);

})(activityBoard.app);