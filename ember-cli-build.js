/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-font-awesome': {
      fontFormats: ['svg', 'woff', 'woff2']
    }
  });

  var bsPathPrefix = 'vendor/bs-4.0.0-alpha.6';
  app.import(`${bsPathPrefix}/deps/tether.min.js`);
  app.import(`${bsPathPrefix}/css/bootstrap-grid.min.css`);
  app.import(`${bsPathPrefix}/css/bootstrap-reboot.min.css`);
  app.import(`${bsPathPrefix}/css/bootstrap.min.css`);
  app.import(`${bsPathPrefix}/js/bootstrap.min.js`);
  app.import(`vendor/showdown.min.js`); //Markdown to HTML

  return app.toTree();
};
