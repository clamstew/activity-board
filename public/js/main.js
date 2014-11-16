'use strict';

var activityBoard = (function(angular) {

  var _app = angular.module('activityBoard', [
    'ui.router', 'ui.keypress'//,
    //'truncate', 'ui.bootstrap'
    ]);

  var currentUserOptions = {
    tooltips: false
  };

  var initialize = (function() {})();

  return {
    app: _app
  };
})(angular);