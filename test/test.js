/* global describe, beforeEach, it */
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('jQuery Boilerplate generator test', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('jquery-boilerplate:app', [
        '../../app', [
          helpers.createDummyGenerator(),
          'mocha:app'
        ]
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      '.travis.yml',
      'Gruntfile.js',
      'boilerplate.jquery.json',
      'demo/index.html',
      'dist/jquery.boilerplate.js',
      'dist/jquery.boilerplate.min.js',
      'package.json',
      'src/jquery.boilerplate.coffee',
      'src/jquery.boilerplate.js'
    ];

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
