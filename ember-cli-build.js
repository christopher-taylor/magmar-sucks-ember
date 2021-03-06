'Use Strict';
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fontawesome: {
      icons: {
        'fontawesome-free-brands': [
          'faGoogle',
          'faApple'
        ],
        'fontawesome-free-solid': [
          'faRss'
        ]
      }
    },
    babel: {
      optional: ['es7.decorators']
    }
  });

  // var bsPathPrefix = 'vendor/bs-4.0.0-beta.3';
  // app.import(`${bsPathPrefix}/css/bootstrap-grid.min.css`);
  // app.import(`${bsPathPrefix}/css/bootstrap-reboot.min.css`);
  // app.import(`${bsPathPrefix}/css/bootstrap.min.css`);
  // app.import(`${bsPathPrefix}/js/bootstrap.bundle.min.js`);
  // app.import(`vendor/showdown.min.js`); //Markdown to HTML

  return app.toTree();
};
