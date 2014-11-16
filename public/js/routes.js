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
        })
        .state('prefs', {
          url: '/prefs',
          templateUrl: '/js/views/preferences/main.html',
          controller: 'UserSettingsCtrl'
        });

      $urlRouterProvider.otherwise('/');
  }]);

})(activityBoard.app);