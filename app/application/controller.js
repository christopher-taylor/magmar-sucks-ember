import Ember from 'ember';
export default Ember.Controller.extend({
  remodal: Ember.inject.service(),
  address: undefined,
  subject: undefined,
  body: undefined,
  sendDisabled: Ember.computed('address', 'subject', 'body', function() {
     return (!this.get('address') || !this.get('subject') || !this.get('body'));
  }),

  closeModal() {
    this.get('remodal').close();
  },
  
  actions: {
    openModal() {
      this.get('remodal').open();
    },
    toggleAndTransition(routeName) {
      Ember.$('.collapse').collapse('hide');
      this.transitionToRoute(routeName);
    }
  }
});
