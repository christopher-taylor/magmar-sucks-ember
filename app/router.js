import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('current');
  this.route('pre-update-one');
  this.route('pre-update-two');
  this.route('404');
  this.route('loading');
});

export default Router;
