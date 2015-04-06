var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');
var util = require('util');

module.exports = yeoman.generators.Base.extend({

	constructor: function () {
		yeoman.generators.Base.apply(this, arguments);

	},

	install: function () {
		var prompts = [];

	  this.name = "jQuery Boilerplate";

	  this.files = this.expandFiles('**/*', { cwd: this.sourceRoot(), dot: true });

	  var ignores = [
	    '.git',
	    'LICENSE',
	    'README.md',
	  ];

		this.files.forEach(function(file) {
	    if (ignores.indexOf(file) !== -1) {
	      return;
	    }

	    this.copy(file, file);
	  }, this);

		this.config.save();

	  this.package = JSON.parse(this.readFileAsString(path.resolve(__dirname, '../package.json')));

	  this.log.writeln('Generating from ' + chalk.cyan('jQuery Boilerplate') + ' v' + chalk.cyan(this.package.version) + '...');
	}

});
