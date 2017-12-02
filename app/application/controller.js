import $ from 'jquery';
import Controller from '@ember/controller';
import {
  action
} from 'ember-decorators/object';

export default Controller.extend({
  @action
  toggleAndTransition(routeName) {
    $('.collapse').collapse('hide');
    this.transitionToRoute(routeName);
  }
});
