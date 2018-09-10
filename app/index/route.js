import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query("episode", "butt");
  },

  setupController(controller, model) {
    this._super();
    controller.set('model', model);
    controller.send('loadMore');
  }
});
