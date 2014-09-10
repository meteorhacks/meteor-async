Package.describe({
  summary: "Set of async utilities to work with NPM modules and other async code blocks",
  version: "1.0.0",
  git: "https://github.com/meteorhacks/meteor-async.git",
  name: "meteorhacks:async"
});

Package.onUse(function (api, where) {
  api.export('Async');
  api.addFiles(['async.js'], 'server');
});

Package.onTest(function (api) {
  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.0');
  }

  api.use(['tinytest']);
  api.addFiles(['async.js', 'test.js'], 'server');
});
