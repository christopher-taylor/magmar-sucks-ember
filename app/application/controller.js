import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({
  remodal: Ember.inject.service(),
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
      Ember.$('.collapse').collapse('hide');
      this.send('cancelMemes');
      this.transitionToRoute(routeName);
    }
  }
});
