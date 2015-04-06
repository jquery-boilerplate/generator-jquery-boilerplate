/* global describe, beforeEach, it */
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;

describe('jQuery Boilerplate generator test', function () {

	var runGen, options;

  beforeEach(function () {
  	options = {
  		'skip-install': true
  	};

    runGen = helpers
      .run(path.join(__dirname, '../app'))
      .inDir(path.join(__dirname, './temp'))
      .withGenerators(['../../app', [helpers.createDummyGenerator(), 'mocha:app']]);
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

    runGen.withOptions(options).on('end', function () {
			assert.file(expected);
   		done();
    });
  });
});
