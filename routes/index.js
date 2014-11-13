'use strict';

module.exports = function(router) {
  router.get('/', function(req, res) {
    res.render('index');
  });

  router.get('/assets', function(req, res) {
    console.log('is this happening??');
    var walk    = require('walk');
    var count = 0;

    // Walker options
    var walker  = walk.walk('.tmp/', { followLinks: false });

    // print out the public directory to console
    walker.on('directory', function (path, stat, next) {
      count += 1;
      console.log( [path, '/', stat.name].join('') )
      next();
    });

    walker.on('end', function() {
        console.log('done walking...');
    });

  });

}