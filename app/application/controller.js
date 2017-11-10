import $ from 'jquery';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import computed from 'ember-computed-decorators';

export default Controller.extend({
  remodal: service(),
  address: undefined,
  subject: undefined,
  body: undefined,

  @computed('address', 'subject', 'body')
  sendDisabled(address, subject, body) {
     return (!address || !subject || !body);
  },

  closeModal() {
    this.get('remodal').close();
  },

  actions: {
    openModal() {
      this.get('remodal').open()
    },
    toggleAndTransition(routeName) {
      $('.collapse').collapse('hide');
      this.transitionToRoute(routeName);
    }
  }
});
