import Route from '@ember/routing/route';

export default Route.extend({
  ajax: Ember.inject.service(),

  model() {
    return this.store.findAll("episode");
  },

  setupController(controller, model) {
    this._super();
    controller.set('model', model);
    controller.send('loadMore');
  }
});
