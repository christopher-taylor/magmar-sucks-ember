import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: 'hash',
  rootURL: '/'
});

Router.map(function() {
  this.route('pre-update-one');
  this.route('pre-update-two');
  this.route('pre-usm');
  this.route('404');
  this.route('catch-all', { path: '*:'});
  this.route('loading');
  this.route('email');
});

export default Router;
