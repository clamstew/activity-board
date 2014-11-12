'use strict';

(function(app){

  app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: './js/views/main.html',
          controller: 'MainCtrl'
        });

      $urlRouterProvider.otherwise('home');
  }]);

})(activityBoard.app);