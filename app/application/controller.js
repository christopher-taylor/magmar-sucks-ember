import $ from 'jquery';
import {
  inject as service
} from '@ember/service';
import Controller from '@ember/controller';
import {
  computed,
  action
} from 'ember-decorators/object';

export default Controller.extend({
  remodal: service(),

  @computed('address', 'subject', 'body')
  get sendDisabled() {
    return (!this.get('address') || !this.get('subject') || !this.get('body'));
  },

  closeModal() {
    this.get('remodal').close();
  },

  @action
  openModal() {
    this.get('remodal').open()
  },
  @action
  toggleAndTransition(routeName) {
    $('.collapse').collapse('hide');
    this.transitionToRoute(routeName);

  }
});
