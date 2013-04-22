Boilerplate Generator Template
========================================

A simple Yeoman generator using Git submodules to clone over a boilerplate hosted elsewhere on GitHub.

Getting started
---------------

These are a few things you will want to customize:

1. `git submodule add YOUR-REPO-ON-GITHUB app/templates`
2. README.md: Anywhere you see 'boilerplate' should be customized with the name of the generator you are creating (e.g generator-awesome)
3. package.json: Customize the repository, author and dependencies.

You can then test out your generator without pushing to npm using `npm install -g` and
`yo awesome` (where awesome is the name of your generator).

Usage (for your end-users)
---------------

1. Install Yeoman: `npm install -g yo`
2. Install the generator locally: `npm install -g generator-boilerplate`
3. Run: `yo boilerplate`
4. Start using Boilerplate

